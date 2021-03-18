import IErrorHandler from './interface';
import BaseError from '@constants/BaseError';
import ILoggerProvider from '@providers/LoggerProvider/interface';

export default class ErrorHandler implements IErrorHandler {
  private loggerProvider: ILoggerProvider;

  constructor(loggerProvider: ILoggerProvider) {
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
