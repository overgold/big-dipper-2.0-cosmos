import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { ExpandMore } from '@material-ui/icons';
import { useRecoilValue } from 'recoil';
import { readSelectedNetwork } from '@recoil/big_dipper_networks';
import VipcoinGold from '@assets/logo.svg';
import { HOME } from '@utils/go_to_page';
import { useStyles } from './styles';
import { NavbarProps } from './types';

const Navbar = (props: NavbarProps) => {
  const classes = useStyles();
  const selected = useRecoilValue(readSelectedNetwork);
  const { isOpen, openNetwork, toggleNavMenus } = props;

  return (
    <div className={classes.root}>
      <Link href={HOME}>
        <a className={classes.a}>
          <VipcoinGold
            width="120"
            height="37"
            viewBox="0 0 211 37"
            className={classes.logo}
          />
        </a>
      </Link>
      <div className={classes.actions}>
        {/* =================================== */}
        {/* Network */}
        {/* =================================== */}
        {/* <div
          className={classes.network}
          onClick={openNetwork}
          role="button"
        >
          <p className="text">
            {selected}
          </p>
          <ExpandMore fontSize="small" />
        </div> */}
        {/* =================================== */}
        {/* Hamburger */}
        {/* =================================== */}
        <div
          role="button"
          onClick={toggleNavMenus}
          className={classnames(classes.hamburger, {
            active: isOpen,
          })}
        >
          <div className="hamburger-content" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
