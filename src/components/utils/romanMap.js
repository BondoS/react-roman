const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  V̅: 5000,
  X̅: 10000,
  L̅: 50000,
  C̅: 100000,
  D̅: 500000,
  M̅: 1000000
};

export default map;

export const getRomanFromDecimal = decimal => {
  return Object.keys(map).find(roman => map[roman] === decimal) || -1;
};
