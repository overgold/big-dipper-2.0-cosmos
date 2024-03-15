import { makeStyles, useTheme } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    theme => ({
      switcher: {
        // maxWidth: '360px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #282828',
        borderRadius: '5px',
        boxSizing: 'border-box',
        [theme.breakpoints.down('xs')]: {
          gridTemplateColumns: '1fr',
        },
      },
      switcherItem: {
        width: '100%',
        padding: '7px 0',
        margin: '0 auto',
        cursor: 'pointer',
        fontWeigth: '400',
        fontSize: '20px',
        lineHeight: '33px',
        color: '#FFFFFF',
        borderRadius: '5px',
        boxSizing: 'border-box',
        transition: 'all .3s linear',
        textAlign: 'center',
      },
      switcherItemActive: {
        background: '#282828',
      },
    }),
    { index: 1 }
  )();

  return {
    classes: styles,
    theme: useTheme(),
  };
};
