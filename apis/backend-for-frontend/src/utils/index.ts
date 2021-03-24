import fs from 'fs';
import { promisify } from 'util';

export const getFileStatus = promisify(fs.stat);

export const delay = (seconds: number) => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};
