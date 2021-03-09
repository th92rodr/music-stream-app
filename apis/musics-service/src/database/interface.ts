export default interface Database {
  getConnection(): any;
  close(): Promise<void>;
}
