import Big from 'big.js';

export type Props = (
  data: any,
  optionsParams: {
    paramsOne: string;
    paramsTwo: string;
  }
) => number;

export const sumBalances: Props = (
  data,
  optionsParams: {
    paramsOne;
    paramsTwo;
  }
) => {
  const totalBalance = data.reduce((acc, params) => {
    const total = params[optionsParams.paramsOne].reduce(
      (total, currentParams) => {
        return Big(total).plus(currentParams[optionsParams.paramsTwo]);
      },
      0
    );
    return Big(acc).plus(Number(total)).toString();
  }, 0);

  return totalBalance;
};
