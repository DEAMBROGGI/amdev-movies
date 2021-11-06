
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: 45,
  },
  title: {
    flexGrow: 1,
  },
  media: {
    height: 45,
  },
  toolbar: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  color: {
    background: theme.pallete.primary,
  },
  menu: {
    color: '#fff'
  }
}));
