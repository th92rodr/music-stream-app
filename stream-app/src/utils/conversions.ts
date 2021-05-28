export function convertDurationToTimeString(duration: number): string {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  const secondsStr = seconds.toString().padStart(2, '0');

  return [minutes, secondsStr].join(':');
}
