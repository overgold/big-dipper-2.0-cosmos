import { Box } from '@components';

import { Typography } from '@material-ui/core';
import dynamic from 'next/dynamic';
import TabsHeader from '@src/screens/account_details/components/accountDetailsTab/tabs';
import { v4 } from "uuid";

import React from 'react';

import classnames from 'classnames';

import useTranslation from 'next-translate/useTranslation';

import { useDetailsAccount } from './hooks';
import { useStyles } from './styles';

const AccountDetailsTab: React.FC<{
  className?: string;
  data?: any;
  tabLabelsHead?:string[];
}> = props => {
  const { t } = useTranslation('accounts');
  const { state, handleTabChange, sortItems, formatItem } = useDetailsAccount();
  const { classes } = useStyles();
  const { sorted, columns } = sortItems(props.data, t);

  return (
    <Box className={classnames(props.className, classes.root)}>
      <div className={classnames(classes.wrapper)}>
        <TabsHeader tab={state.tab} handleTabChange={handleTabChange} tabLabelsHead={props.tabLabelsHead}/>
      </div>
      {sorted.length !== 0 && (
        <div className={classnames(classes.container)}>
          {/* head */}
          <ul className={classnames(classes.list)}>
            {columns.map(column => (
              <li className={classnames(classes.item)} key={`${column.key}${v4()}`}>
                <p className={classnames(classes.headTitle)}>{column.value}</p>
              </li>
            ))}
          </ul>
          {/* row */}
          <ul className={classnames(classes.listRow)}>
            {sorted.map((row) => (
              <li className={classnames(classes.itemRow)} key={`${row.key}${v4()}`}>
                {columns.map(column => {
                  return (
                    <p className={classnames(classes.headTitleRow)} key={`${column.key}${v4()}`}>
                      {formatItem(row, column.key)}
                    </p>
                  );
                })}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Box>
  );
};

export default AccountDetailsTab;
