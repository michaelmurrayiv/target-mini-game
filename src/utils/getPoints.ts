export const getPoints = (size: number): number => {
  if (size >= 10 && size <= 20) return 10;
  if (size >= 21 && size <= 30) return 9;
  if (size >= 31 && size <= 40) return 8;
  if (size >= 41 && size <= 50) return 7;
  if (size >= 51 && size <= 60) return 6;
  if (size >= 61 && size <= 70) return 5;
  if (size >= 71 && size <= 80) return 4;
  if (size >= 81 && size <= 90) return 3;
  if (size >= 91 && size <= 100) return 2;
  return 0;
};
