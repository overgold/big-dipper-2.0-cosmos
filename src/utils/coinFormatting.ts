import { Decimal } from 'decimal.js';

export const SATOSHI_AMOUNT = 100000000;

export const convertCoinFromSatoshi = (num: Decimal.Value) => {
  return Decimal.div(num, SATOSHI_AMOUNT).toNumber();
};

export const convertCoinToSatoshi = (num: Decimal.Value) => {
  return Decimal.mul(num, SATOSHI_AMOUNT).toNumber();
};

export const roundToFixed = (num: Decimal.Value, scale: number) => {
  return (convertCoinFromSatoshi(num) || 0).toFixed(scale);
};

export const roundToScaleNumber = (num: number, scale: number): number => {
  const satoshiNum = convertCoinFromSatoshi(num) || 0;

  if (!('' + satoshiNum).includes('e')) {
    return +(Math.round(+`${satoshiNum}e${scale}`) + `e-${scale}`);
  } else {
    const arr = satoshiNum.toString().split('e');
    const sig = +arr[1] + scale > 0 ? '+' : '';

    return +(
      Math.round(+(`${+arr[0]}e${sig}` + (+arr[1] + scale))) + `e-${scale}`
    );
  }
};
