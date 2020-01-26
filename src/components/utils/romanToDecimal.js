/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
import map from './romanMap';

export default roman => {
  const numArr = [];

  for (let i = 0; i < roman.length; i++) {
    // check if the next letter is ◌̅  then add current and the next as just on character
    // https://www.compart.com/en/unicode/U+0305
    if (/[\u0305]/.test(roman.slice(i + 1, i + 2))) {
      numArr.push(roman.slice(i, i + 2));
      i++;
    } else {
      numArr.push(roman.slice(i, i + 1));
    }
  }
  return numArr.reduce((acc, curr, i, arr) => {
    // if the current number is less than the next number
    return map[curr] < map[arr[i + 1]]
      ? // subtract it from the accumulative
        (acc -= map[curr])
      : // else, if current is equal or larger than the next number, then add it to the accumaltive
        (acc += map[curr]);
  }, 0);
};
