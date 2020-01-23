const map = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
  5000: 'V̅',
  10000: 'X̅',
  50000: 'L̅',
  100000: 'C̅',
  500000: 'D̅',
  1000000: 'M̅'
};

export default map;

export const getDecimalFromRoman = roman => {
  return Number(Object.keys(map).find(decimal => map[decimal] === roman)) || -1;
};
