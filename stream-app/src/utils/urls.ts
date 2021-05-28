import { staticFilesAddress } from '../services/api';

export function staticFilesUrl(queryParam: string): string {
  return `${staticFilesAddress}/files?file=${queryParam}`;
}

export function streamMusicUrl(queryParam: string): string {
  return `${staticFilesAddress}/musics?file=${queryParam}`;
}
