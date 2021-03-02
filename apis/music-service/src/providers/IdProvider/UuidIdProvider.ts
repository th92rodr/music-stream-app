import { v4 as uuid } from 'uuid';

import IdProvider from './interface';

export default class UuidIdProvider implements IdProvider {
  public generate(): string {
    return uuid();
  }
}
