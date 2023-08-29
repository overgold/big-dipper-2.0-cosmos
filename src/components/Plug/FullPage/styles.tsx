import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    marginTop: theme.spacing(3),
  },
  title: {
    fontSize: 36,
    color: '#DEDEDE',
    fontFamily: 'Montserrat',
    marginBottom: theme.spacing(2),
    fontWeight: 400,
  },
  text: {
    fontSize: 20,
    color: '#DEDEDE',
    marginBottom: theme.spacing(5),
    fontFamily: 'Montserrat',
    fontWeight: 400,
  },
  logo: {
    width: 170,
    height: 30,
    marginBottom: theme.spacing(5),
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    marginBottom: theme.spacing(4),
  },
  image: {
    width: 850,
    height: 450,
    [theme.breakpoints.down('md')]: {
      width: 430,
      height: 230,
    },
    [theme.breakpoints.down('sm')]: {
      width: 430,
      height: 230,
    },
  },
}));
