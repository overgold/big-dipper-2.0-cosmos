import { Tabs, Tab } from '@material-ui/core';

import { a11yProps } from '@utils/allyProps';

import React from 'react';

import classnames from 'classnames';

import useTranslation from 'next-translate/useTranslation';

import { useStyles } from './styles';

const TabsHeader: React.FC<{
  className?: string;
  tab: number;
  handleTabChange: (event: any, newvalue: number) => void;
  tabLabelsHead?:string[];
}> = ({ className, tab, handleTabChange,tabLabelsHead }) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <div className={classnames(className, classes.root)}>
      <Tabs
        variant="scrollable"
        scrollButtons="off"
        value={tab}
        onChange={handleTabChange}
        indicatorColor="primary"
         className={classnames(className, classes.tabs)}
      >
   
          {tabLabelsHead.map((x, i) => (
            <Tab key={x} label={t(x)} {...a11yProps(i)} />
          ))}
      </Tabs>
    </div>
  );
};

export default TabsHeader;
