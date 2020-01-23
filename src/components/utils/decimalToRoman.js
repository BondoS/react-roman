/* eslint-disable no-case-declarations */
/* eslint-disable no-plusplus */
import romanDecimalMap from './romanMap';

export default decimal => {
  const numArr = decimal.toString().split('');
  let fullRes = [];
  // loop over each single digit, and calculate how many zeros responds to the current digit
  // 100 means 3 zeros, or 3 digits
  for (
    let i = 0, numOfZeros = numArr.length;
    i < numArr.length;
    i++, numOfZeros--
  ) {
    let currRes = [];
    const currentNumber = numArr[i];
    // get the two corresponding roman numbers that have the same numbers of zeros/digits
    // for 100 the range will be C `100` and D `500`
    const romanRange = Object.keys(romanDecimalMap).filter(
      roman => romanDecimalMap[roman].toString().length === numOfZeros
    );
    // we can edit subtractive to additive notation easily from this switch case.
    switch (+currentNumber) {
      // if `900` with subtractive notation, I need to subtract C `100` from the direct larger roman number M `1000`
      case 9:
        const largerRoman = Object.keys(romanDecimalMap).find(
          roman => romanDecimalMap[roman].toString().length === numOfZeros + 1
        );
        currRes.push(romanRange[0]);
        currRes.push(largerRoman);
        break;
      // if 800 to 500, then add D `500` then push the subsequent number of C `100`
      case 8:
      case 7:
      case 6:
      case 5:
        currRes.push(romanRange[1]);
        currRes = currRes.concat(Array(+currentNumber - 5).fill(romanRange[0]));
        break;
      case 4:
        currRes.push(romanRange[0]);
        currRes.push(romanRange[1]);
        break;
      case 3:
      case 2:
      case 1:
        currRes = currRes.concat(Array(+currentNumber).fill(romanRange[0]));
        break;
      default:
        return -1;
    }
    fullRes = fullRes.concat(currRes);
  }
  return fullRes.join('');
};
