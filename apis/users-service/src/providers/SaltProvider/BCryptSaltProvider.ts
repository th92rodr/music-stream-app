import { genSalt } from 'bcryptjs';

import ISaltProvider from './interface';

export default class BCryptSaltProvider implements ISaltProvider {
  public async generate(rounds: number): Promise<string> {
    return genSalt(rounds);
  }
}
