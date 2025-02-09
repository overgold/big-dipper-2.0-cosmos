import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Divider,
  Typography,
  Switch,
  FormControlLabel,
} from '@material-ui/core';
import { Box, TransactionMessagesFilter } from '@components';
import { getMessageByType } from '@msg';
import { useStyles } from './styles';

const Messages: React.FC<{
  className?: string;
  messages: any[];
  viewRaw: boolean;
  toggleMessageDisplay: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMessageFilterCallback: (value: string) => void;
}> = ({ className, ...props }) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();

  const formattedItems = props.messages.map(x => {
    return getMessageByType(x, props.viewRaw, t);
  });

  const renderMessasgesArray = (count: number) => {
    let arr = [];
    if (count !== 0) for (let i = 1; i <= count; ) arr.push(i++);
    return arr;
  };

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.header}>
        <div className={classes.mobileOptions}>
          <Typography variant="h2">{t('messages')}</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={props.viewRaw}
                onChange={props.toggleMessageDisplay}
                color="primary"
              />
            }
            label={t('raw')}
          />
        </div>
        <div className={classes.desktopOptions}>
          <FormControlLabel
            control={
              <Switch
                checked={props.viewRaw}
                onChange={props.toggleMessageDisplay}
                color="primary"
              />
            }
            label={t('raw')}
          />
          <TransactionMessagesFilter
            className={classes.filter}
            callback={props.onMessageFilterCallback}
          />
        </div>
      </div>
      <Divider />
      <div className={classes.list}>
        {renderMessasgesArray(props.messages.length).map((_, index) => {
          const selectedItem = formattedItems[index];
          return (
            <div key={index}>
              <div>
                <div className={classes.item}>
                  <div className={classes.tags}>{selectedItem.type}</div>
                  <span className="msg">{selectedItem.message}</span>
                </div>
                {index !== props.messages.length - 1 && <Divider />}
              </div>
            </div>
          );
        }) || null}
      </div>
    </Box>
  );
};

export default Messages;
