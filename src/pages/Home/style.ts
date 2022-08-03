import { styled } from '@mui/material/styles';

const PREFIX = 'intermediaries-detail';

export const classes = {
  root: `${PREFIX}-root`,
  card: `${PREFIX}-card`,
  list: `${PREFIX}-list`,
  buttonWrapper: `${PREFIX}-button-wrapper`,
};

export const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    [`& .${classes.buttonWrapper}`]: {
      width: '100%',
      marginBottom: theme.spacing(2),
      display: 'flex',
      justifyContent: 'flex-end',
    },

    [`& .${classes.card}`]: {
      width: '100%',
      minHeight: 600,
      display: 'flex',
      [`& .${classes.list}`]: {
        width: '300px',
      },
    }
  },
}));

