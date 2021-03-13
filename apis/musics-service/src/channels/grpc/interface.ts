export default interface IGrpcChannel {
  start(): void;
  stop(): Promise<void>;
}
