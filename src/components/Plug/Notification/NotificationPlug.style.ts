import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    color: '#020202',
    letterSpacing: 'normal',
    lineHeight: 1,
    fontWeight: 400,
    width: '100%',
    height: '39px',
    backgroundColor: '#F3A50D',
    position: 'fixed',
  },
  text: {
    margin: '0 20px',
  },
}));
