import map, { getRomanFromDecimal } from './romanMap';

it(`Get the decimal representation for single Roman number`, () => {
  expect(map.I).toEqual(1);
  expect(map.V).toEqual(5);
  expect(map.X).toEqual(10);
  expect(map.L).toEqual(50);
  expect(map.C).toEqual(100);
  expect(map.D).toEqual(500);
  expect(map.M).toEqual(1000);
  expect(map['V̅']).toEqual(5000);
  expect(map['X̅']).toEqual(10_000);
  expect(map['L̅']).toEqual(50_000);
  expect(map['C̅']).toEqual(100_000);
  expect(map['D̅']).toEqual(500_000);
  expect(map['M̅']).toEqual(1000_000);
});

it(`Get the Roman representation for Single decimal number`, () => {
  expect(getRomanFromDecimal(1)).toEqual('I');
  expect(getRomanFromDecimal(5)).toEqual('V');
  expect(getRomanFromDecimal(10)).toEqual('X');
  expect(getRomanFromDecimal(50)).toEqual('L');
  expect(getRomanFromDecimal(100)).toEqual('C');
  expect(getRomanFromDecimal(500)).toEqual('D');
  expect(getRomanFromDecimal(1000)).toEqual('M');
  expect(getRomanFromDecimal(5000)).toEqual('V̅');
  expect(getRomanFromDecimal(10_000)).toEqual('X̅');
  expect(getRomanFromDecimal(50_000)).toEqual('L̅');
  expect(getRomanFromDecimal(100_000)).toEqual('C̅');
  expect(getRomanFromDecimal(500_000)).toEqual('D̅');
  expect(getRomanFromDecimal(1000_000)).toEqual('M̅');
});
