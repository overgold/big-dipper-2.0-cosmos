import React from 'react';
import { Typography, useMediaQuery } from '@material-ui/core';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { CustomToolTip } from '@components';
import { useStyles } from './styles';
import { usePrice } from './hooks';
import useTranslation from 'next-translate/useTranslation';
import { ChartData, SwitcherType } from '../../types';

interface ITokenPrice {
  items: ChartData[];
  type: SwitcherType;
}

const TokenPrice = ({ items, type }: ITokenPrice) => {
  const { t } = useTranslation('home');
  const { classes, theme } = useStyles();

  const { tickPriceFormatter } = usePrice();

  const isMobile = useMediaQuery('(max-width:400px)');

  const priceTooltip = (x: ChartData) => {
    return (
      <>
        <Typography>
          {t('priceHistory')}: {x.value}
        </Typography>
        <Typography>
          {t('priceUp')}: {x.a}
        </Typography>
        <Typography>
          {t('priceDown')}: {x.b}
        </Typography>
      </>
    );
  };

  const capitalizationTooltip = (x: ChartData) => {
    return (
      <>
        <Typography>
          {t('capitalization')} : {`${x.value} USD`}
        </Typography>
        <Typography>
          {t('coins')}: {`${x.a} OVG`}
        </Typography>
      </>
    );
  };

  const CustomizedAxisTick = (props: any) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={10}
          textAnchor="end"
          fill="#666"
          transform={`rotate(-${isMobile ? 50 : 35})`}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div className={classes.chart}>
      <ResponsiveContainer width="99%">
        <AreaChart
          data={items}
          margin={{
            top: 20,
            right: 0,
            left: type === SwitcherType.price ? 0 : 20,
            bottom: 40,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={theme.palette.custom.primaryData.one}
                stopOpacity={0.5}
              />
              <stop
                offset="95%"
                stopColor={theme.palette.custom.primaryData.one}
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={theme.palette.divider} />
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={<CustomizedAxisTick />}
            interval={'preserveStartEnd'}
          />
          <YAxis tickLine={false} tickFormatter={tickPriceFormatter} />
          <Tooltip
            cursor={false}
            content={
              <CustomToolTip>
                {x =>
                  type === SwitcherType.price
                    ? priceTooltip(x)
                    : capitalizationTooltip(x)
                }
              </CustomToolTip>
            }
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={theme.palette.custom.primaryData.one}
            fillOpacity={0.3}
            fill={theme.palette.custom.primaryData.one}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TokenPrice;
