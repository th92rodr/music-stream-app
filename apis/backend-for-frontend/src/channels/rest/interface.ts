export default interface IRestChannel {
  start(): void;
  stop(): Promise<void>;
}
