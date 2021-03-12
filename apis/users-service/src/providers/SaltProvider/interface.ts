export default interface ISaltProvider {
  generate(rounds: number): Promise<string>;
}
