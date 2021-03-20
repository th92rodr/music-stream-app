export const removeUndefineds = <T>(value: T | undefined): value is T => value != undefined;

export const arrayIntersection = <T>(array1: Array<T>, array2: Array<T>): Array<T> => {
  return array1.filter(element => array2.includes(element));
};
