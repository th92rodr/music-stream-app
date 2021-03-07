import winston from 'winston';
const { colorize, printf, splat, timestamp } = winston.format;

import LoggerProvider from './interface';

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

export default class WinstonLoggerProvider implements LoggerProvider {
  private logger: winston.Logger;

  constructor() {
    const formatter = winston.format.combine(
      colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      splat(),
      printf(info => {
        const { timestamp, level, message, ...meta } = info;
        meta.message = message;
        return `[${timestamp}] [${level}]: ${Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''}`;
      }),
    );

    const transport = new winston.transports.Console({
      format: formatter,
    });

    this.logger = winston.createLogger({
      levels: customLevels.levels,
      transports: [transport],
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
