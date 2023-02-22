import { useState } from 'react';
import { useStyles } from './styles';
import ArrowIcon from '@assets/arrow.svg';
import { Typography } from '@material-ui/core';
import { useScreenSize } from '@src/hooks';
import { getMiddleEllipsis } from '@src/utils/get_middle_ellipsis';
import Link from 'next/link';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';

export interface AccordionProps {
  headTitle?: string;
  data: any;
  options?: {
    itemsOne?: string;
    itemsTwo?: string;
    itemsOneTitle?: () => string;
    itemsTwoTitle?: () => string;
  };
}

export const Accordion = ({ headTitle, data, options }: AccordionProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { isDesktop } = useScreenSize();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.headWrapper}>
        <Typography variant="body1" className={classes.headTitle}>
          {headTitle}
        </Typography>
        <ArrowIcon
          onClick={handleClick}
          className={
            open ? `${classes.arrow} ${classes.arrowRotate}` : classes.arrow
          }
        />
      </div>

      <ul
        className={
          open
            ? `${classes.wrapper} ${classes.wrapperVisible}`
            : `${classes.wrapper} ${classes.wrapperHidden}`
        }
      >
        {options && options.itemsOne && options.itemsTwo
          ? data.map((item, index) => (
              <li className={classes.list} key={index}>
                <>
                  <Typography variant="body1">
                    <strong>{`${options.itemsOneTitle}: `}</strong>
                    <Link
                      href={ACCOUNT_DETAILS(item[options.itemsOne])}
                      passHref
                    >
                      {!isDesktop
                        ? getMiddleEllipsis(item[options.itemsOne], {
                            beginning: 15,
                            ending: 5,
                          })
                        : item[options.itemsOne]}
                    </Link>
                  </Typography>
                  <Typography variant="body1">
                    <strong>{`${options.itemsTwoTitle}: `}</strong>
                    {item[options.itemsTwo]}
                  </Typography>
                </>
              </li>
            ))
          : data.map((item, index) => (
              <li className={classes.list} key={index}>
                <Typography variant="body1">
                  <Link href={ACCOUNT_DETAILS(item)} passHref>
                    {!isDesktop
                      ? getMiddleEllipsis(item, {
                          beginning: 15,
                          ending: 5,
                        })
                      : item}
                  </Link>
                </Typography>
              </li>
            ))}
      </ul>
    </div>
  );
};
