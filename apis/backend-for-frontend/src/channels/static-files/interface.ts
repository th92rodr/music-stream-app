export default interface IStaticFilesChannel {
  start(): void;
  stop(): Promise<void>;
}
