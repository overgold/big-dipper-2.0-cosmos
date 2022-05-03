import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import VipcoinGold from '@assets/logo.svg';
import {
  Divider, Typography,
} from '@material-ui/core';
import { SocialMedia } from './components';
import {
  footerLinks,
} from './utils';
import { useStyles } from './styles';

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)}>
      <div className={classnames('footer')}>
        {/* ============================= */}
        {/* logo */}
        {/* ============================= */}
        <div className="footer__logo--container">
          <VipcoinGold
            width="180"
            height="37"
            viewBox="0 0 211 37"
            className="footer__logo"
          />
        </div>
        {/* ============================= */}
        {/* links */}
        {/* ============================= */}
        <div className="footer__links">
          {footerLinks.map((group) => {
            return (
              <div key={group.key} className={`${group.key} links__group`}>
                <h3>{t(`common:${group.key}`)}</h3>
                {group.links.map((x) => {
                  return (
                    <a
                      key={x.url}
                      href={x.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t(`common:${x.key}`)}
                    </a>
                  );
                })}
              </div>
            );
          })}
          {/* ============================= */}
          {/* social */}
          {/* ============================= */}
          <div className="footer__social">
            <h3>{t('common:community')}</h3>
            <SocialMedia />
          </div>
        </div>
      </div>
      <Divider />
      <div className="footer__closing--container">
        <Typography className="footer__closing--text">
          {t('common:copyright')}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
