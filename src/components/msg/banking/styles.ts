import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(theme => {
    return {
      extraList: {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px 0',
      },
      extraItem: {
        minWidth: '200px',
        padding: '10px',
        borderRadius: '10px',
        background: theme.palette.grey[800],
        '&:not(:last-child)': {
          marginBottom: '20px',
        },
      },
    };
  })();

  return styles;
};
