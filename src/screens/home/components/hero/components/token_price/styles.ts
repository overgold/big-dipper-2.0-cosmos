import { makeStyles, useTheme } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    () => {
      return {
        chart: {
          height: '350px',
          width: '100%',
          position: 'relative',
          '& .yAxis .recharts-cartesian-axis-tick:first-child': {
            display: 'none',
          },
        },
      };
    },
    { index: 1 }
  )();

  return {
    classes: styles,
    theme: useTheme(),
  };
};
