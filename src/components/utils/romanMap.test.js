import { getDecimalFromRoman } from './romanMap';

it(`Get the decimal representation for a Roman number`, () => {
  expect(getDecimalFromRoman('I')).toEqual(1);
  expect(getDecimalFromRoman('V')).toEqual(5);
  expect(getDecimalFromRoman('X')).toEqual(10);
  expect(getDecimalFromRoman('L')).toEqual(50);
  expect(getDecimalFromRoman('C')).toEqual(100);
  expect(getDecimalFromRoman('D')).toEqual(500);
  expect(getDecimalFromRoman('M')).toEqual(1000);
  expect(getDecimalFromRoman('V̅')).toEqual(5000);
  expect(getDecimalFromRoman('X̅')).toEqual(10_000);
  expect(getDecimalFromRoman('L̅')).toEqual(50_000);
  expect(getDecimalFromRoman('C̅')).toEqual(100_000);
  expect(getDecimalFromRoman('D̅')).toEqual(500_000);
  expect(getDecimalFromRoman('M̅')).toEqual(1000_000);
});
