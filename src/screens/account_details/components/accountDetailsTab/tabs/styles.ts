import { makeStyles } from '@material-ui/core/styles';

import background from 'assets/images/background-login.png';

export const useStyles = () => {
  const styles = makeStyles(
    theme => {
      return {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '& .MuiTab-wrapper': {
            fontWeight:700
        },
          '& .MuiTabs-root .Mui-selected': {
            color: '#F0A521'
        },
          '& .MuiTabs-indicator': {
            backgroundColor: '#F0A521',
        },
      
        
        },
        
        tabs: {
          '&:hover': {
            color: 'red',
          },
        },
      };
    },
    { index: 1 }
  )();

  return styles;
};
