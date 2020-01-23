/* eslint-disable no-return-assign */
import map from './romanMap';

export default roman => {
  return roman.split('').reduce((acc, curr, i, arr) => {
    // if the current number is less than the next number
    return map[curr] < map[arr[i + 1]]
      ? // subtract it from the accumulative
        (acc -= map[curr])
      : // else, if current is equal or larger than the next number, then add it to the accumaltive
        (acc += map[curr]);
  }, 0);
};
