export const SATOSHI_AMOUNT = 100000000;

export const convertCoinToSatoshi = (num: number): number => {
  return num / SATOSHI_AMOUNT;
};

export const roundToFixed = (num: number, scale: number): string => {
  return (convertCoinToSatoshi(num) || 0).toFixed(scale);
};

export const roundToScaleNumber = (num: number, scale: number): number => {
  const satoshiNum = convertCoinToSatoshi(num) || 0;

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
