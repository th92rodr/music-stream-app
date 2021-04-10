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
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;

  let secondsStr = seconds.toString();
  if (secondsStr.length == 1) {
    secondsStr = `0${secondsStr}`;
  }

  return `${minutes}:${secondsStr}`;
};

export const getAlbumDuration = (tracks: Array<Music>): string => {
  const duration = tracks.reduce((acc, current) => {
    return acc + current.durationInSeconds;
  }, 0);

  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  let secondsStr = seconds.toString();
  if (secondsStr.length == 1) {
    secondsStr = `0${secondsStr}`;
  }

  return `${minutes} min ${secondsStr} sec`;
};

export const getFileExtension = (file: string): string => {
  const [, extension] = path.extname(file).split('.');
  return extension;
};

export const prepareArtistDescription = (description: string): string => {
  const newLine = /\n/gi;
  return description.replace(newLine, '\n\n');
};
