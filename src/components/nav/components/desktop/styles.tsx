import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(theme => {
    const OPEN_DRAWER_WIDTH = 230;
    const CLOSED_DRAWER_WIDTH = 59;

    return {
      root: {
        '& .MuiDrawer-paperAnchorDockedLeft': {
          border: 'none',
        },
      },
      logo: {
        width: '150px',
        padding: theme.spacing(2, 1.75, 2.5),
        display: 'flex',
        minWidth: 0,
        alignItems: 'center',
        gap: '18px',
        // '& > svg': {
        //   width: '37px',
        // },
        '&:hover': {
          cursor: 'pointer',
        },
        '& .logo-title': {
          display: 'hidden',
          fontSize: '1rem',
          fontWeight: '400',
          fontFamily: '"Hind Madurai", sans-serif',
          lineHeight: '1.5',
          whiteSpace: 'pre-wrap',
          letterSpacing: '0.5px',
          color: '#999999',
        },
        '&.plug': {
          marginTop: '30px',
        },

        // '& .logo-title-none': {
        //   display: 'none',
        // },
      },
      appBar: {
        ...theme.mixins.toolbar,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        background: theme?.palette?.background?.default,
        color: theme?.palette?.custom?.fonts?.fontTwo ?? 'inherit',
        width: `calc(100% - ${CLOSED_DRAWER_WIDTH}px)`,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.enteringScreen,
        }),
        '&.MuiPaper-elevation4': {
          boxShadow: 'none',
        },
        '&.open': {
          marginLeft: OPEN_DRAWER_WIDTH,
          width: `calc(100% - ${OPEN_DRAWER_WIDTH}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
      drawer: {
        width: OPEN_DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        paddingLeft: theme.spacing(2),
        boxSizing: 'border-box',
      },
      drawerOpen: {
        width: OPEN_DRAWER_WIDTH,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
        width: CLOSED_DRAWER_WIDTH,
      },
    };
  })();

  return styles;
};
