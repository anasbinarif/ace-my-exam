export enum AuthErrorType {
  INVALID_CREDENTIALS = 'Invalid credentials provided',
  USER_NOT_FOUND = 'User not found',
  USER_DISABLED = 'User account is disabled',
  TOKEN_EXPIRED = 'Authentication token has expired',
  TOKEN_INVALID = 'Invalid authentication token',
  UNAUTHORIZED = 'Unauthorized access',
  PASSWORD_TOO_WEAK = 'Password is too weak',
  EMAIL_ALREADY_EXISTS = 'Email already exists',
  USER_LOCKED_OUT = 'User is locked out after too many attempts',
  SERVER_ERROR = 'Internal server error',
  MISSING_FIELDS = 'Missing required fields',
}

export default class AuthError extends Error {
  type: AuthErrorType;
  statusCode: number;

  constructor(type: AuthErrorType, statusCode: number = 400) {
    super(type);
    this.name = 'AuthError';
    this.type = type;
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }

  logError() {
    // eslint-disable-next-line no-console
    console.error(`${this.name} - ${this.type}: ${this.message}`);
  }
}
