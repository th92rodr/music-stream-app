import { StatusCode } from './index';
import BaseError from './BaseError';

export class ErrorUserNotFound extends BaseError {
  constructor(id: string | null, email: string | null) {
    super({
      name: 'NOT FOUND',
      statusCode: StatusCode.NOT_FOUND,
      isOperational: true,
      message: id != null ? `An user entity with the id ${id} was not found.` : `An user entity with the email ${email} was not found.`,
    });
  }
}

export class ErrorInvalidCredentials extends BaseError {
  constructor() {
    super({
      name: 'INVALID CREDENTIALS',
      statusCode: StatusCode.BAD_REQUEST,
      isOperational: true,
      message: 'Invalid credentials.',
    });
  }
}

export class ErrorEmailInUse extends BaseError {
  constructor(email: string) {
    super({
      name: 'BAD REQUEST',
      statusCode: StatusCode.BAD_REQUEST,
      isOperational: true,
      message: `The email ${email} is already in use.`,
    });
  }
}

export class InternalError extends BaseError {
  constructor() {
    super({
      name: 'INTERNAL ERROR',
      statusCode: StatusCode.INTERNAL_SERVER_ERROR,
      isOperational: false,
      message: 'An unexpected error occur.',
    });
  }
}
