import IErrorHandler from './interface';
import BaseError from '@constants/BaseError';
import ILoggerProvider from '@providers/LoggerProvider/interface';

export default class ErrorHandler implements IErrorHandler {
  private loggerProvider: ILoggerProvider;

  constructor(loggerProvider: ILoggerProvider) {
    this.loggerProvider = loggerProvider;
  }

  public async handleError(error: Error): Promise<void> {
    if (this.isTrustedError(error)) {
      this.loggerProvider.error('', error);
    } else {
      this.loggerProvider.fatal('', error);
    }
  }

  public isTrustedError(error: Error): boolean {
    if (error instanceof BaseError) {
      return error.isOperational;
    }

    return false;
  }
}
