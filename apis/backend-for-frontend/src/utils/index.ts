import fs from 'fs';
import { promisify } from 'util';

export const getFileStatus = promisify(fs.stat);
