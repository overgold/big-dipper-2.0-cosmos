import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(theme => {
    return {
      root: {
        [theme.breakpoints.up('md')]: {
          // display: 'grid',
          // gridTemplateColumns: 'repeat(2,1fr)',
        },
      },
      dialog: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '& .MuiTypography-body1': {
          marginBottom: theme.spacing(2),
        },
        '& .dialog__share--wrapper': {
          marginTop: theme.spacing(2),
        },
        '& .share-buttons': {
          '&:not(:last-child)': {
            marginRight: theme.spacing(1),
          },
          '&.email': {
            '& circle': {
              fill: theme.palette.primary.main,
            },
          },
        },
      },
      actionIcons: {
        '&:hover': {
          cursor: 'pointer',
        },
      },
      icons: {
        '& svg': {
          width: theme.spacing(4.5),
          height: theme.spacing(4.5),
        },
      },
      list: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: '1fr 1fr',
          justifyItems: 'center',
          gap: '12px',
        },
      },
      item: {
        width: '100%',
        padding: theme.spacing(2, 0),
        color: theme.palette.custom.fonts.fontTwo,
        '&:first-child': {
          paddingTop: 0,
        },
        '&:last-child': {
          [theme.breakpoints.up('md')]: {
            gridColumn: 2,
            gridRow: '1 / 5',
          },
          '& .value': {
            fontWeight: 700,
          },
          paddingBottom: 0,
        },
        '&:not(:last-child)': {
          borderBottom: `solid 1px ${theme.palette.divider}`,
        },
        '& .label': {
          marginBottom: theme.spacing(1),
        },
        '& .detail': {
          '&.MuiTypography-body1': {
            wordWrap: 'break-word',
          },
        },
        [theme.breakpoints.up('md')]: {
          padding: 0,
          '&:not(:last-child)': {
            borderBottom: 'none',
          },
          '& .label': {
            marginBottom: 0,
          },
        },
      },
      copyText: {
        '& .detail': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row-reverse',
          justifyContent: 'flex-end',
          '& svg': {
            width: '1rem',
            marginLeft: theme.spacing(1),
          },
        },
      },
    };
  })();

  return styles;
};
