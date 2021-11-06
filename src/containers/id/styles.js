import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

export const useStyles = makeStyles(theme => ({
  media: {
    maxHeight: '100%',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    marginTop: '30px',
    marginBottom: '30px'
  },
  divider: {
    marginTop: '30px',
    marginBottom: '30px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  color: {
    border: '1px solid #01d277',
    marginLeft: '5px',
    color: '#01d277'
  }
}));

export const MyAvatar = styled(Avatar)({
  border: '1px solid #01d277',
  background: '#fff',
  color: '#01d277'
});