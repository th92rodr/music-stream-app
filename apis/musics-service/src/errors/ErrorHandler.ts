import BaseError from './BaseError';
import LoggerProvider from '@providers/LoggerProvider/interface';

export default class ErrorHandler {
  private loggerProvider: LoggerProvider;

  constructor(loggerProvider: LoggerProvider) {
    this.loggerProvider = loggerProvider;
  }

  public async handleError(error: Error): Promise<void> {
    this.loggerProvider.error('', error);
  }

  public isTrustedError(error: Error): boolean {
    if (error instanceof BaseError) {
      return error.isOperational;
    }

    return false;
  }
}
