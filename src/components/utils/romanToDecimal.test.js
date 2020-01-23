import convert from './romanToDecimal';

it(`Get the decimal representation for a FULL Roman number`, () => {
  expect(convert('MMMMCCCXII')).toEqual(4312);
  expect(convert('MMMMMCCXXXIV')).toEqual(5234);
  expect(convert('MMIX')).toEqual(2009);
  expect(convert('II')).toEqual(2);
});
