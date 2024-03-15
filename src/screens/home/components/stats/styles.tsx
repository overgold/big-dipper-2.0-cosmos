import { makeStyles, useTheme } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(theme => {
    return {
      '@keyframes rotate': {
        from: { transform: 'rotate(360deg)' },
        to: { transform: 'rotate(0deg)' },
      },
      root: {
        height: '100%',
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'column',
        overflow: 'auto',
      },
      content: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
      },
      label: {
        marginBottom: theme.spacing(2),
      },
      description: {
        display: 'block',
        fontSize: '1.125rem',
        width: '100%',
      },
      descriptionInfo: {
        fontSize: '1.4375rem',
        fontWeight: 700,
        color: theme.palette.primary.main,
        width: '100%',
        textTransform: 'uppercase',
      },
      chart: {
        '& .recharts-radial-bar-background-sector': {
          fill: Color(theme.palette.primary.main).alpha(0.4).toString(),
        },
      },
      chartPercentLabel: {
        fontSize: '2rem',
        fill: theme.palette.custom.fonts.fontOne,
      },
      chartExtraLabel: {
        fill: theme.palette.custom.fonts.fontTwo,
      },
      chartLabel: {
        fontSize: '1rem',
        color: theme.palette.custom.fonts.fontOne,
      },
      info: {
        display: 'flex',
        padding: '15px 0',
        flexDirection: 'column',
        gap: '0.5rem',
        width: '100%',
        color: theme.palette.custom.fonts.fontTwo,
        '&:first-child': {
          paddingBottom: '10px',
        },
        '& .label': {
          color: theme.palette.custom.fonts.fontThree,
          marginBottom: theme.spacing(0.5),
        },
        [theme.breakpoints.up('lg')]: {
          marginBottom: 0,
          gap: '1rem',
        },
      },
      logoWrapper: {
        padding: 0,
        [theme.breakpoints.up('lg')]: {
          padding: '20px 0',
        },
      },
      logoContainer: {
        width: '69px',
        height: '69px',
        margin: '0 auto',
        position: 'relative',
      },
      logoArrow: {
        animation: '$rotate linear 4s infinite',
      },
      logo: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      },
    };
  })();

  return {
    classes: styles,
    theme: useTheme(),
  };
};
