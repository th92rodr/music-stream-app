export function convertDurationToTimeString(duration: number): string {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  const secondsStr = seconds.toString().padStart(2, '0');

  return [minutes, secondsStr].join(':');
}

export function formatFoundationDate(date: Date): string {
  return new Date(date).getFullYear().toString();
}

export function formatReleaseDate(date: Date): string {
  // prettier-ignore
  return `${convertMonthToString(new Date(date).getMonth())}, ${new Date(date).getFullYear()}`;
}

function convertMonthToString(month: number): string {
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
}
