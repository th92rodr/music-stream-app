import { genSalt } from 'bcryptjs';

import SaltProvider from './interface';

export default class BCryptSaltProvider implements SaltProvider {
  public async generate(rounds: number): Promise<string> {
    return genSalt(rounds);
  }
}
