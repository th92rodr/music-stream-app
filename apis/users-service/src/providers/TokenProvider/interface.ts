export default interface TokenProvider {
  generate(id: string): string;
}
