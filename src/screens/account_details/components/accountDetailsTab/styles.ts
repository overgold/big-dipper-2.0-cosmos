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
          gridTemplateColumns: 'minmax(100px, 160px) 1fr repeat(2,minmax(100px, 160px))',
        },
        gridTemplateColumns:'minmax(100px, 160px) 1fr repeat(2,minmax(100px, 160px))',
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
          gridTemplateColumns: 'minmax(100px, 160px) 1fr repeat(2,minmax(100px, 160px))',
          '&:nth-child(odd)': {
            background: '#282828   ',
          },
        },
        gridTemplateColumns: 'minmax(100px, 160px) 1fr repeat(2,minmax(100px, 160px))',
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
