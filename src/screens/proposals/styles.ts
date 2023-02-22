import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(theme => {
    return {
      root: {
        ...theme.mixins.layout,
        '& .wrapper-icon': {
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
        },
        '& a': {
          color: theme.palette.custom.fonts.highlight,
        },
      },
    };
  })();

  return styles;
};
