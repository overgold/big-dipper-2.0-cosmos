import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(theme => {
    return {
      root: {
        width: '100%',
      },
      headWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      },
      headTitle: {
        fontWeight: 700,
      },
      wrapper: {
        transition: 'max-height 0.3s',
        overflow: 'auto',
        '&:not(last-child)': {
          marginBottom: '12px',
        },
      },
      wrapperVisible: {
        maxHeight: '500px',
        transition: 'max-height 0.3s',
      },
      wrapperHidden: {
        maxHeight: 0,
        transition: 'max-height 0.3s',
      },
      container: {},
      arrow: {
        cursor: 'pointer',
        transition: 'max-height 0.3s',
      },
      arrowRotate: {
        cursor: 'pointer',
        transform: 'rotate(90deg) ',
        transformOrigin: 'center',
        transition: 'all 0.2s linear',
      },
      list: {
        marginLeft: '30px',
        listStyle: 'disc',
      },
    };
  })();

  return styles;
};
