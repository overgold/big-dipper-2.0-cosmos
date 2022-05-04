import React, { useEffect, useState } from 'react';
import { Box } from '@components';
import { TokenPrice } from './components';
import Switcher from './components/switcher';
import { IHome, PriceHistoryData } from '../../types';
import { ChartData, SwitcherType } from './types';

const Hero = (props: IHome & ComponentDefault) => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);
  const [switcher, setSwitcher] = useState<SwitcherType>(SwitcherType.price);

  useEffect(() => {
    if (props.data.length) {
      setChartData(props.data.map((el, index) => chartDataChanger(el, index)));
    }
  }, [switcher]);

  const chartDataChanger = (el: PriceHistoryData, index: number) => {
    return switcher === SwitcherType.price
      ? {
          name: index,
          value: el.price,
          a: el.priceUp,
          b: el.priceDown,
        }
      : {
          name: index,
          value: el.capitalization,
          a: el.coinsCap,
          b: el.fiatCap,
          c: el.goldCap,
        };
  };

  return (
    <Box className={props.className}>
      <Switcher type={switcher} setType={setSwitcher} />
      <TokenPrice items={chartData} type={switcher} />
    </Box>
  );
};

export default Hero;
