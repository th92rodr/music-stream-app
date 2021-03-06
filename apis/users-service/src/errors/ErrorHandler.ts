import BaseError from './BaseError';

export default class ErrorHandler {
  public async handleError(error: Error): Promise<void> {
    console.log('Error Handler: ', error);
  }

  public isTrustedError(error: Error): boolean {
    if (error instanceof BaseError) {
      return error.isOperational;
    }

    return false;
  }
}
