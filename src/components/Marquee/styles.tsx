import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  item: {
    textAlign: 'center',
    minWidth: '100%',
    animation: '$marquee 20s linear infinite',
    [theme.breakpoints.down('lg')]: {
      animationDuration: '15s',
    },
    [theme.breakpoints.down('sm')]: {
      animationDuration: '10s',
    },
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    gap: theme.spacing(2),
    '&:hover $item': {
      animationPlayState: 'paused',
    },
  },
  '@keyframes marquee': {
    from: {
      transform: 'translateX(0)',
    },
    to: {
      transform: 'translateX(calc(-100% - 20px))',
    },
  },
}));
