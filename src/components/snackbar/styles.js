import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

export const useStyles = makeStyles(theme => ({
  icon: {
    marginLeft: '15px'
  }
}));

export const MySnackbar = styled(Snackbar)({
  backgroundColor: '#d32f2f',
  color: '#fff',
  borderRadius: '4px',
  padding: '6px 16px',
  fontWeight: '400',
  lineHeight: '1.43',
  letterSpacing: '0.01071em',
});