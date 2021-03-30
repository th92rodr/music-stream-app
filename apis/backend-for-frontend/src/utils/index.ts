import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

import Music from '@entities/Music';

export const getFileStatus = promisify(fs.stat);

export const delay = (seconds: number) => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

export const convertMonthToString = (month: number): string => {
  // prettier-ignore
  switch (month) {
    case 0: return 'Jan';
    case 1: return 'Feb';
    case 2: return 'Mar';
    case 3: return 'Apr';
    case 4: return 'May';
    case 5: return 'Jun';
    case 6: return 'Jul';
    case 7: return 'Aug';
    case 8: return 'Sep';
    case 9: return 'Oct';
    case 10: return 'Nov';
    case 11: return 'Dec';
    default: return '';
  }
};

export const getMusicDuration = (durationInSeconds: number): string => {
  const quotient = Math.floor(durationInSeconds / 60);
  const remainder = durationInSeconds % 60;

  return `${quotient}:${remainder}`;
};

export const getAlbumDuration = (tracks: Array<Music>): string => {
  const duration = tracks.reduce((acc, current) => {
    return acc + current.durationInSeconds;
  }, 0);

  const quotient = Math.floor(duration / 60);
  const remainder = duration % 60;

  return `${quotient} min ${remainder} sec`;
};

export const getFileExtension = (file: string): string => {
  const [, extension] = path.extname(file).split('.');
  return extension;
};
