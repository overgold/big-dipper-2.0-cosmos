import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(theme => {
    return {
      root: {
        background: theme.palette.background.paper,
        padding: theme.spacing(6, 0),
        color: theme.palette.custom.fonts.fontOne,
        '& .footer': {
          padding: theme.spacing(0, 3),
          margin: '0 auto',
          maxWidth: '1440px',
          width: '100%',
        },
        '& .footer__closing--container': {
          padding: theme.spacing(1),
          background: 'white',
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
        },
        '& .MuiDivider-root': {
          margin: theme.spacing(4, 0),
        },
        '& p': {
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
        },
        '& .footer__logo--container': {
          // display: 'flex',
          // alignItems: 'center',
          '& p': {
            marginTop: theme.spacing(1),
            marginBottom: 0,
          },
        },
        '& .footer__logo': {
          width: '180px',
        },
        '& .footer__closing--text': {
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '19px',
          margin: '0',
          textAlign: 'center',
          color: '#131316',
        },
        '& .footer__links': {

          // marginTop: '1rem',
        },
        '& h3': {
          color: theme.palette.custom.fonts.fontThree,
          fontWeight: 500,
          marginBottom: theme.spacing(2),
          marginTop: theme.spacing(2),
        },
       
        '& .links__group': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
         
          '& a': {
            margin: '0.5rem 0',
            color: 'inherit',
            textDecoration: 'none',
            paddingBottom: '1rem',
            borderBottom: `solid 1px ${theme.palette.custom.fonts.fontFour}`,
            transition: '0.2s',
            width: '100%',
            '&:hover': {
              color: Color(theme.palette.custom.fonts.fontOne)
                .alpha(0.6)
                .string(),
            },
          },
          '&.forbole': {
            '& a:last-child': {
              paddingBottom: '0',
              borderBottom: 'none',
            },
          },
          '&.media': {
            display: 'none',
          },
          [theme.breakpoints.up('lg')]: {
            '& a': {
              borderBottom: 'none',
              padding: 0,
              width: 'auto',
            },
            '&.media': {
              display: 'grid',
            },
          },
        },
        [theme.breakpoints.up('md')]: {
          paddingBottom: 0,
          '& .MuiDivider-root': {
            marginBottom: 0,
          },
          '& .footer__closing--container': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
        [theme.breakpoints.up('lg')]: {
          '& .MuiDivider-root': {
            marginTop: theme.spacing(5),
          },
          '& .footer': {
            display: 'flex',
          },
          '& .footer__links': {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
         
          },
       
          '& .links__group': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            textAlign: 'center',
            width: '100%',
            paddingLeft: '40px',
            flexDirection:'row',
          },
           
          '& h3': {
            fontSize: '1.125rem',
            marginTop: 0,
          },
          '& .footer__social': {
            // justifyContent: 'flex-end',
          },
        },
      },
    };
  })();

  return styles;
};
