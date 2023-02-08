import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(theme => {
    const iconFill =
      theme.palette.type === 'light'
        ? theme.palette.custom.fonts.fontTwo
        : theme.palette.custom.general.icon;
    return {
      root: {
        '& a': {
          margin: '0.5rem 0',
          color: '#FFF',
          '&:hover': {
            color: Color(theme.palette.custom.fonts.fontOne)
              .alpha(0.6)
              .string(),
          },
        },
        '& .media': {
          margin: '0 0.5rem',

          '&:first-child': {
            marginLeft: 0,
          },
          '&:last-child': {
            marginRight: 0,
          },
          '& path': {
            transition: 'all 0.3s ease',
            fill: iconFill,
          },
          '&:hover': {
            '& path': {
              fill: Color(iconFill).alpha(0.6).string(),
            },
          },
        },
      },
    };
  })();

  return styles;
};
