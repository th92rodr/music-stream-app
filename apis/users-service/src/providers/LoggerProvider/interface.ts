export default interface LoggerProvider {
  info(message: string, meta?: any): void;
  error(message: string, error: Error): void;
  warn(message: string, meta: Error): void;
  fatal(message: string, meta: Error): void;
  debug(message: string, meta?: any): void;
}
