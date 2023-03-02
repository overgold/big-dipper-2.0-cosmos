import { Box } from '@components';

import { Typography } from '@material-ui/core';

import TabsHeader from '@src/screens/account_details/components/accountDetailsTab/tabs';

import React from 'react';

import classnames from 'classnames';

import useTranslation from 'next-translate/useTranslation';

import { useDetailsAccount } from './hooks';
import { useStyles } from './styles';

const AccountDetailsTab: React.FC<{
  className?: string;
  data?: any;
}> = props => {
  const { t } = useTranslation('accounts');
  const { state, handleTabChange, sortItems, formatItem } = useDetailsAccount();
  const { classes } = useStyles();
  const { sorted, columns } = sortItems(props.data, t);

  return (
    <Box className={classnames(props.className, classes.root)}>
      <div className={classnames(classes.wrapper)}>
        <TabsHeader tab={state.tab} handleTabChange={handleTabChange} />
      </div>
      <div className={classnames(classes.container)}>
        {
          <>
            {/* head */}
            <ul className={classnames(classes.list)}>
              {columns.map(column => (
                <li className={classnames(classes.item)} key={column.key}>
                  <p className={classnames(classes.headTitle)}>
                    {column.value}
                  </p>
                </li>
              ))}
            </ul>
            {/* row */}
            <ul className={classnames(classes.listRow)}>
              {sorted.map(row => (
                <li className={classnames(classes.itemRow)} key={row.key}>
                  {columns.map(column => {
                    return (
                      <p className={classnames(classes.headTitleRow)}>
                        {formatItem(row, column.key)}
                      </p>
                    );
                  })}
                </li>
              ))}
            </ul>
          </>
        }
      </div>
    </Box>
  );
};

export default AccountDetailsTab;
