import { v4 as uuid } from 'uuid';

import IIdProvider from './interface';

export default class UuidIdProvider implements IIdProvider {
  public generate(): string {
    return uuid();
  }
}
