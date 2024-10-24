import { z } from "zod";

export enum ResourceType {
  NOTE = "NOTE",
  PAST_PAPER = "PAST_PAPER",
  REVISION_PAPER = "REVISION_PAPER",
  MARKING_SCHEME = "MARKING_SCHEME",
}

export enum EducationLevel {
  O_LEVEL = "O_LEVEL",
  A_LEVEL = "A_LEVEL",
}

export const createResourceSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().optional(),
  resource_type: z.enum([ResourceType.NOTE, ResourceType.PAST_PAPER, ResourceType.REVISION_PAPER, ResourceType.MARKING_SCHEME]),
  subject_id: z.number().int().positive(),
  board_id: z.number().int().positive(),
  year: z.number().int().min(1950).max(new Date().getFullYear()),
  education_level: z.enum([EducationLevel.O_LEVEL, EducationLevel.A_LEVEL]),
  is_public: z.boolean().default(true),
  tags: z.array(z.string()).optional(),
  file: z.custom<File>((val) => val instanceof File, {
    message: "File is required",
  }),
});

export type CreateResourceInput = z.infer<typeof createResourceSchema>;
