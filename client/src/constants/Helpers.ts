export const mphToKnots = (value: number): number => {
  return value / 1.151;
};

export const pressureToAltimeter = (value: number): number => {
  const number = Math.trunc(value);
  return number / 100;
};
