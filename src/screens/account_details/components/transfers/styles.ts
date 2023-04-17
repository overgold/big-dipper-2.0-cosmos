import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(theme => {
    return {
      root: {
        '& .MuiTypography-h2': {
          marginBottom: theme.spacing(2),
        },
      },
      wrapperTab: {
        paddingBottom: '10px',
        [theme.breakpoints.up('lg')]: {
          paddingBottom: '20px',
        },
      },
      list: {
        minHeight: '500px',
        height: '30vh',
        [theme.breakpoints.up('lg')]: {
          height: '30vh',
        },
      },
    };
  })();

  return styles;
};
