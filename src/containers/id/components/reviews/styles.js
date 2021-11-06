import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#00000',
    marginTop: '22px',
  },
  review: {
    margin: theme.spacing(3),
    marginBottom: '22px',
  }
}));
