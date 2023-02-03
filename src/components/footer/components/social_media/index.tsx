import React from 'react';
import { socialMediaLinks } from './utils';
import { useStyles } from './styles';
import { Props } from './types';
import useTranslation from 'next-translate/useTranslation';

const SocialMedia = (props: Props) => {
  const { className = '' } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={`${className} ${classes.root} social-media`}>
      {socialMediaLinks.map(x => {
        return (
          <a
            key={x.className}
            href={x.url}
            target="_blank"
            rel="noreferrer"
            className={`media ${x.className}`}
          >
            {t(`common:${x.name}`)}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
