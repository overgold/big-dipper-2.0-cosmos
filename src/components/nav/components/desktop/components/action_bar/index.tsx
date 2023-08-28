import React from 'react';
import classnames from 'classnames';
import { useGetComponentDimension } from '@hooks';
import { useStyles } from './styles';
import { Network, NetworkList, SettingsList } from './components';
import { SearchBar } from '../../..';

const ActionBar: React.FC<{
  isNetwork: boolean;
  className?: string;
  isEnabledNotificationPlug?: boolean;
  toggleNetwork: () => void;
}> = ({ toggleNetwork, className, isNetwork, isEnabledNotificationPlug }) => {
  const { ref: heightRef, height } = useGetComponentDimension();
  const classes = useStyles();
  return (
    <div
      className={classnames(className, classes.root, {
        plug: isEnabledNotificationPlug,
      })}
      ref={heightRef}
    >
      <div className={classes.actions}>
        <SearchBar
          className={classnames(classes.searchBar, { open: isNetwork })}
        />
        <Network
          className={classnames(classes.network, { open: isNetwork })}
          toggleNetwork={toggleNetwork}
        />
        <SettingsList />
      </div>
      {/* <NetworkList
        actionHeight={height}
        className={classnames(classes.networkList, {
          open: isNetwork,
        })}
      /> */}
    </div>
  );
};

export default ActionBar;
