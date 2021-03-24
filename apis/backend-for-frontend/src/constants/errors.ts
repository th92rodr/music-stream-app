import { HttpStatusCode } from './index';
import BaseError from './BaseError';

export class ErrorInvalidToken extends BaseError {
  constructor() {
    super({
      name: 'INVALID TOKEN',
      statusCode: HttpStatusCode.FORBIDDEN,
      isOperational: true,
      message: 'Invalid token.',
    });
  }
}

export class InternalError extends BaseError {
  constructor() {
    super({
      name: 'INTERNAL ERROR',
      statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
      isOperational: false,
      message: 'An unexpected error occur.',
    });
  }
}
