import React from 'react';
import classnames from 'classnames';
import {
  TableRow,
  TableHead,
  TableCell,
  Table,
  TableBody,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import { AvatarName } from '@components';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { useStyles } from './styles';
import { columns } from './utils';
import { ItemType } from '../../types';
import { ADDRESS_DETAILS } from '@utils/go_to_page';

const Desktop: React.FC<{
  className?: string;
  items: ItemType[];
}> = ({ className, items }) => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const isLaptop = useMediaQuery('(max-width:1500px)');

  const formattedData = items.map(x => {
    return {
      height: (
        <Link href={BLOCK_DETAILS(x.height)} passHref>
          <Typography variant="body1" className="value" component="a">
            {numeral(x.height).format('0,0')}
          </Typography>
        </Link>
      ),
      txs: numeral(x.txs).format('0,0'),
      time: dayjs.utc(x.timestamp).fromNow(),
      proposer: (
        <>
          {isLaptop ? (
            <a href={ADDRESS_DETAILS(x.proposer.address)}>
              {getMiddleEllipsis(x.proposer.name, {
                beginning: 4,
                ending: 3,
              })}
            </a>
          ) : (
            <AvatarName
              address={x.proposer.address}
              imageUrl={x.proposer.imageUrl}
              name={getMiddleEllipsis(x.proposer.name, {
                beginning: 6,
                ending: 5,
              })}
            />
          )}
        </>
      ),
      hash: getMiddleEllipsis(x.hash, {
        beginning: !isLaptop ? 6 : 4,
        ending: !isLaptop ? 5 : 3,
      }),
    };
  });

  return (
    <div className={classnames(className, classes.root)}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.key} align={column.align}>
                {t(column.key)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedData.map((row, i) => (
            <TableRow key={`${items[i].height}`}>
              {columns.map((column, index) => {
                const { key, align } = column;
                const item = row[key];
                return (
                  <TableCell align={align} key={`${key}-${index}`}>
                    {item}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
