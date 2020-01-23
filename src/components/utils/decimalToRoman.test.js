import convert from './decimalToRoman';

it(`Get the Roman representation for a FULL decimal number`, () => {
  expect(convert(4312)).toEqual('MV̅CCCXII');
  expect(convert(3999)).toEqual('MMMCMXCIX');
  expect(convert(3099)).toEqual(-1); // no zeros allowed
  expect(convert(567)).toEqual('DLXVII');
  expect(convert(2)).toEqual('II');
});
