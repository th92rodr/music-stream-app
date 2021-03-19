import winston from 'winston';
const { colorize, printf, splat, timestamp } = winston.format;

import ILoggerProvider from './interface';
import Config from '@config/index';

const customLevels = {
  levels: {
    debug: 4,
    info: 3,
    warn: 2,
    error: 1,
    fatal: 0,
  },
};

const customColors = {
  debug: 'green',
  info: 'green',
  warn: 'yellow',
  error: 'red',
  fatal: 'red',
};

export default class WinstonLoggerProvider implements ILoggerProvider {
  private logger: winston.Logger;

  constructor() {
    const formatter = winston.format.combine(
      colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      splat(),
      printf(info => {
        const { timestamp, level, message, ...meta } = info;
        if (message != '') {
          meta.message = message;
        }
        return `[${timestamp}] [${level}]: ${Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''}`;
      }),
    );

    const consoleTransport = new winston.transports.Console({
      format: formatter,
    });

    const fileTransport = new winston.transports.File({
      filename: Config.logging.filePath,
    });

    this.logger = winston.createLogger({
      levels: customLevels.levels,
      transports: [Config.logging.redirect == 'file' ? fileTransport : consoleTransport],
      defaultMeta: { service: 'musics-service' },
    });

    winston.addColors(customColors);
  }

  public info(message: string, meta?: any): void {
    this.logger.info(message, meta);
  }

  public error(message: string, meta: Error): void {
    this.logger.error(message, meta);
  }

  public warn(message: string, meta: Error): void {
    this.logger.warn(message, meta);
  }

  public fatal(message: string, meta: Error): void {
    this.logger.log('fatal', message, meta);
  }

  public debug(message: string, meta?: any): void {
    this.logger.debug(message, meta);
  }
}
