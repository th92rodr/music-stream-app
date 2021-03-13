export default interface IErrorHandler {
  handleError(error: Error): Promise<void>;
  isTrustedError(error: Error): boolean;
}
