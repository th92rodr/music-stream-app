export const removeUndefineds = <S>(value: S | undefined): value is S => value != undefined;
