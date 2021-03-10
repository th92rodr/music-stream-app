export default interface GrpcChannel {
  start(): void;
  stop(): Promise<void>;
}
