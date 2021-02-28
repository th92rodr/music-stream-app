export default interface SaltProvider {
  generate(rounds: number): Promise<string>;
}
