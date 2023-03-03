import { makeStyles, useTheme } from '@material-ui/core/styles';

import background from 'assets/images/background-login.png';

export const useStyles = () => {
  const defaultTheme = useTheme();
  const styles = makeStyles(theme => {
    return {
      root: {
        '& .MuiTypography-h2': {
          marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.up('lg')]: {
          display: 'flex',
          flexDirection: 'column',
        },
      },
      wrapper: {
        paddingBottom: '20px',
      },
      container: {
        padding: '0 20px 20px 20px',
        maxHeight: '360px',
        overflow: 'hidden',
      },

      list: {
        display: 'grid',
        width: '100%',
        [theme.breakpoints.up('lg')]: {
          gridTemplateColumns: 'repeat(3,1fr) minmax(100px, 140px)',
        },
        gridTemplateColumns:'repeat(3,1fr) minmax(100px, 140px)',
        listStyle: 'none',
        padding: '0 14px',
      },
      item: {
        width: '100%',
        padding: '14px 0',
      },
      headTitle: {
        fontWeight: 600,
      },
      listRow: {
        width: '100%',
        overflow: 'auto',
        maxHeight: '320px',
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
      },
      itemRow: {
        display: 'grid',
       
        [theme.breakpoints.up('lg')]: {
          gridTemplateColumns: 'repeat(3,1fr) minmax(100px, 140px)',
          '&:nth-child(odd)': {
            background: '#282828   ',
          },
        },
        gridTemplateColumns: 'repeat(3,minmax(100px,1fr)) minmax(100px, 140px)',
        padding: '14px',
      },
      headTitleRow: {
        fontWeight: 600,
      },
    };
  })();

  return {
    classes: styles,
    theme: defaultTheme,
  };
};
