import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import {
  TRANSACTION_DETAILS,
  ACCOUNT_DETAILS,
  BLOCK_DETAILS,
} from '@utils/go_to_page';
import { Typography, Divider } from '@material-ui/core';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';

import { mergeRefs } from '@utils/merge_refs';
import { SingleTransferMobile, Loading, Result } from '@components';
import { useList, useListRow } from '@hooks';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { useStyles } from './styles';
import { TransactionsListState } from '../../types';
import useTranslation from 'next-translate/useTranslation';

const Mobile: React.FC<TransactionsListState> = ({
  className,
  itemCount,
  loadMoreItems,
  isItemLoaded,
  transactions,
  typeTabs,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const { listRef, getRowHeight, setRowHeight } = useList();

  const items =
    typeTabs === 1
      ? transactions.map(x => ({
          hash: (
            <Link href={TRANSACTION_DETAILS(x.hash)} passHref>
              <Typography variant="body1" component="a">
                {getMiddleEllipsis(x.hash, {
                  beginning: 10,
                  ending: 5,
                })}
              </Typography>
            </Link>
          ),
          kind: t(`${x.kind}`),
          walletFrom: (
            <Link href={ACCOUNT_DETAILS(x.walletFrom)} passHref>
              <Typography variant="body1" component="a">
                {getMiddleEllipsis(x.walletFrom, {
                  beginning: 8,
                  ending: 5,
                })}
              </Typography>
            </Link>
          ),
          walletTo: (
            <Link href={ACCOUNT_DETAILS(x.walletTo)} passHref>
              <Typography variant="body1" component="a">
                {getMiddleEllipsis(x.walletTo, {
                  beginning: 8,
                  ending: 5,
                })}
              </Typography>
            </Link>
          ),
          amount: `${x.amount} ${x.asset.toUpperCase()}`,
          time: dayjs.utc(x.timestamp).fromNow(),
          block: (
            <Link href={BLOCK_DETAILS(x.height)} passHref>
              <Typography variant="body1" component="a">
                {numeral(x.height).format('0,0')}
              </Typography>
            </Link>
          ),
        }))
      : transactions.map(x => ({
          hash: (
            <Link href={TRANSACTION_DETAILS(x.hash)} passHref>
              <Typography variant="body1" component="a">
                {getMiddleEllipsis(x.hash, {
                  beginning: 10,
                  ending: 5,
                })}
              </Typography>
            </Link>
          ),
          kind: t(`${x.kind}`),
          wallet: (
            <Link href={ACCOUNT_DETAILS(x.wallet)} passHref>
              <Typography variant="body1" component="a">
                {getMiddleEllipsis(x.wallet, {
                  beginning: 8,
                  ending: 5,
                })}
              </Typography>
            </Link>
          ),
          amount: `${x.amount} ${x.asset.toUpperCase()}`,
          time: dayjs.utc(x.timestamp).fromNow(),
          block: (
            <Link href={BLOCK_DETAILS(x.height)} passHref>
              <Typography variant="body1" component="a">
                {numeral(x.height).format('0,0')}
              </Typography>
            </Link>
          ),
        }));

  return (
    <div className={classnames(className, classes.root)}>
      <AutoSizer>
        {({ height, width }) => {
          return (
            <InfiniteLoader
              isItemLoaded={isItemLoaded}
              itemCount={itemCount}
              loadMoreItems={loadMoreItems}
            >
              {({ onItemsRendered, ref }) => (
                <List
                  className="List"
                  height={height}
                  itemCount={itemCount}
                  itemSize={getRowHeight}
                  onItemsRendered={onItemsRendered}
                  ref={mergeRefs(listRef, ref)}
                  width={width}
                >
                  {({ index, style }) => {
                    const { rowRef } = useListRow(index, setRowHeight);
                    if (!isItemLoaded(index)) {
                      return (
                        <div style={style}>
                          <div ref={rowRef}>
                            <Loading />
                          </div>
                        </div>
                      );
                    }
                    const item = items[index];
                    return (
                      <div style={style}>
                        <div ref={rowRef}>
                          <SingleTransferMobile {...item} />
                          {index !== itemCount - 1 && <Divider />}
                        </div>
                      </div>
                    );
                  }}
                </List>
              )}
            </InfiniteLoader>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default Mobile;
