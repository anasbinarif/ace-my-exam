import { CloudUpload as UploadIcon } from '@mui/icons-material';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ErrorIcon from '@mui/icons-material/Error';
import {
  Box,
  Button,
  CircularProgress,
  FormLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState, useCallback, useEffect } from 'react';

import { useSnackbar } from '../../../contexts/SnackbarContext';
// Types
interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
  original_filename: string;
}

interface UploadStatus {
  type: 'success' | 'error';
  message: string;
  urls?: string[];
}

interface FileUploadProps {
  maxFileSize?: number; // in bytes
  maxFiles?: number;
  hoist: (file: string) => void;
  reset?: boolean;
}

interface SignatureResponse {
  signature: string;
  timestamp: number;
  cloudName: string;
  apiKey: string;
}

// Styled Components
const UploadContainer = styled(Box)(() => ({
  width: '100%',
  height: '8rem',
}));

const DropZone = styled(Box)(({ theme }) => ({
  margin: 'auto 0',
  width: '100%',
  height: '8rem',
  border: `2px dashed ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'border .24s ease-in-out',
}));

const Input = styled('input')({
  display: 'none',
});

export const DropZoneLabel = styled(FormLabel)({
  fontSize: '1.6rem',
  color: '#666',
  fontWeight: 600,
  marginBottom: '0.8rem',
});

const FileUpload: React.FC<FileUploadProps> = ({
  maxFileSize = 10 * 1024 * 1024, // 10MB default
  maxFiles = 5,
  hoist = () => { },
  reset
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus | null>(null);
  const [, setUploadProgress] = useState<{ [key: string]: number }>({});
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (reset) {
      setFiles([]);
      setUploadStatus(null);
      setUploadProgress({});
      hoist(''); // Clear the hoisted value
    }
  }, [reset, hoist]);

  const validateFiles = (fileList: File[]): { isValid: boolean; error?: string } => {
    const hasInvalidType = fileList.some((file) => file.type !== 'application/pdf');

    if (hasInvalidType) {
      return { isValid: false, error: 'Only PDF files are allowed' };
    }

    const hasInvalidSize = fileList.some((file) => file.size > maxFileSize);

    if (hasInvalidSize) {
      return {
        isValid: false,
        error: `Files must be smaller than ${maxFileSize / (1024 * 1024)}MB`,
      };
    }

    if (files.length + fileList.length > maxFiles) {
      return {
        isValid: false,
        error: `Maximum ${maxFiles} files allowed`,
      };
    }

    return { isValid: true };
  };

  const getSignature = async (): Promise<SignatureResponse> => {
    const response = await fetch('/api/resources/upload', {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Failed to get upload signature');
    }

    return response.json();
  };

  const uploadFile = async (file: File, signature: SignatureResponse): Promise<CloudinaryUploadResponse> => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('api_key', signature.apiKey);
    formData.append('timestamp', signature.timestamp.toString());
    formData.append('signature', signature.signature);
    formData.append('resource_type', 'auto');

    const response = await fetch(`https://api.cloudinary.com/v1_1/${signature.cloudName}/auto/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    return response.json();
  };

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      e.stopPropagation();

      const droppedFiles = Array.from(e.dataTransfer.files);
      const validation = validateFiles(droppedFiles);

      if (!validation.isValid) {
        setUploadStatus({
          type: 'error',
          message: validation.error || 'Validation failed',
        });

        return;
      }

      setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
      setUploadStatus(null);
    },
    [files.length]
  );

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const validation = validateFiles(selectedFiles);

    if (!validation.isValid) {
      setUploadStatus({
        type: 'error',
        message: validation.error || 'Validation failed',
      });

      return;
    }

    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    setUploadStatus(null);
  };

  const uploadToCloudinary = async (): Promise<void> => {
    setUploading(true);
    setUploadStatus(null);

    try {
      const signature = await getSignature();
      const uploadedUrls: string[] = [];

      for (const file of files) {
        try {
          // Initialize progress for this file
          setUploadProgress((prev) => ({
            ...prev,
            [file.name]: 0,
          }));

          const result = await uploadFile(file, signature);

          uploadedUrls.push(result.secure_url);

          // Set progress to 100 for completed file
          setUploadProgress((prev) => ({
            ...prev,
            [file.name]: 100,
          }));
        } catch {
          showSnackbar(`Failed to upload ${file.name}`);
          throw new Error(`Failed to upload ${file.name}`);
        }
      }

      setUploadStatus({
        type: 'success',
        message: `Successfully uploaded ${uploadedUrls.length} files`,
        urls: uploadedUrls,
      });

      // hoist upwards into parent
      hoist(uploadedUrls[0]);

      // setFiles([]);
      setUploadProgress({});
    } catch (error) {
      setUploadStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to upload files',
      });
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    if (files.length > 0) {
      uploadToCloudinary();
    }
  }, [files]);

  return (
    <UploadContainer>

      {uploading ? (
        <Box
          sx={{
            width: '100%',
            height: '8rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `2px dashed #ccc`,
            borderRadius: '8px',
          }}
        >
          <CircularProgress size={2} color={'primary'} sx={{ mr: 2, color: '#ccc' }} />
        </Box>
      ) : (
        <DropZone onDragOver={onDragOver} onDrop={onDrop}>
          <Input type="file" accept=".pdf" onChange={handleFileSelect} id="file-input" />

          <label htmlFor="file-input">
            <Button
              disableRipple
              component="span"
              sx={{
                padding: 0,
                margin: 0,
                width: '100%',
                height: '8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {uploadStatus?.type === 'error' ? (
                <ErrorIcon sx={{ mr: 2, color: 'black' }} />
              ) : uploadStatus?.type === 'success' ? (
                <DoneAllIcon sx={{ mr: 2, color: 'black' }} />
              ) : (
                <UploadIcon
                  sx={{
                    margin: '0 auto',
                    transform: 'translate(-14px, -2px)'
                  }}
                />
              )}
            </Button>
          </label>
        </DropZone>
      )}
    </UploadContainer>
  );
};

export default FileUpload;
