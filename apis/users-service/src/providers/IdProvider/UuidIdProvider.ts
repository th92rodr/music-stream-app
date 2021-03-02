import { uuid } from 'uuidv4';

import IdProvider from './interface';

export default class UuidIdProvider implements IdProvider {
  public generate(): string {
    return uuid();
  }
}
