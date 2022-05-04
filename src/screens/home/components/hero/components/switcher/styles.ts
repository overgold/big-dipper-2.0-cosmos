import { makeStyles, useTheme } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    theme => {
      return {
        switcher: {
          maxWidth: '360px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid #282828',
          borderRadius: '5px',
          boxSizing: 'border-box',
          [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
          },
        },
        switcherItem: {
          width: '50%',
          padding: '7px 28px',
          cursor: 'pointer',
          fontWeigth: '400',
          fontSize: '20px',
          lineHeight: '33px',
          color: '#FFFFFF',
          borderRadius: '5px',
          boxSizing: 'border-box',
          transition: 'all .3s linear',
          [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
        },
        switcherItemActive: {
          background: '#282828',
        },
      };
    },
    { index: 1 }
  )();

  return {
    classes: styles,
    theme: useTheme(),
  };
};
