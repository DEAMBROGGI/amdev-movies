import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { height } from '@mui/system';

export const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    height:300,
    zIndex:1,
  },
  media: {
    height: 200,
    cursor: 'auto'
  },
  title: {
    height: 100,
    display:"flex",
    justifyContent:"center",
    alignItems: 'center',
    cursor: 'auto',
    padding: "0px !Important",
    textAlign:"center"
  },
  chip: {
    marginTop: '10px',
    color: theme.palette.text.secondary,
  }
}));

export const MyChip = styled(Chip)({
  marginTop: '10px',
  color: '#fff',
  backgroundColor: '#000000ab'
});