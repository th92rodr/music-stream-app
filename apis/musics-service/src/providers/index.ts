import UuidIdProvider from './IdProvider/UuidIdProvider';
import WinstonLoggerProvider from './LoggerProvider/WinstonLoggerProvider';

export const idProvider = new UuidIdProvider();

export const loggerProvider = new WinstonLoggerProvider();
