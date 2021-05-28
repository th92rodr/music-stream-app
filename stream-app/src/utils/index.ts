import { staticFilesAddress } from '../services/api';

export function staticFilesUrl(queryParam: string): string {
  return `${staticFilesAddress}/files?file=${queryParam}`;
}

export { convertDurationToTimeString } from './conversions';
