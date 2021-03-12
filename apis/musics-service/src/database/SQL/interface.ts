export default interface IDatabase {
  getConnection(): any;
  close(): Promise<void>;
}
