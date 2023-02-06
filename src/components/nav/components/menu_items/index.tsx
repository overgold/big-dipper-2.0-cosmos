import React from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';
import { getMenuItems } from './utils';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { selector } from 'recoil';
import Portal from '@src/hooks/portal';

const MenuItems = ({ isMenu }) => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation('common');
  const items = getMenuItems();
  return (
    <List>
      {items.map(x => {
        let isActive = false;
        if (x.url === router?.asPath) {
          isActive = true;
        }
        if (router?.asPath?.includes(x.url) && x.url !== '/') {
          isActive = true;
        }

        return (
          <Link href={x.url} key={x.key} passHref>
            <ListItem
              button
              className={classnames(classes.root, {
                active: isActive,
              })}
              component="a"
              id={x.key}
            >
              <ListItemIcon >{x.icon}</ListItemIcon>
              <ListItemText primary={t(x.key)} />
              <Portal>
                <Tooltip
                  data-tooltip-delay-hide={1000}
                  place="right"
                  anchorId={!isMenu ? x.key: ''}
                  className="tooltip"
                >
                  {t(x.key)}
                </Tooltip>
              </Portal>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default MenuItems;
