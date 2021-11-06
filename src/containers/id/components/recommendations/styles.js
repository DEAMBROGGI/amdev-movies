import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '30px',
    marginBottom: '30px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#00000'
  }
}));
