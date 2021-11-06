import React from 'react';
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux";
import {viewSnackbar} from '../../core/Movie/actions'
import { useStyles, MySnackbar } from './styles';
//material ui
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Snack() {

  const classes = useStyles();

  const snackbar = useSelector(state => state.movieReducer.snackbar);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(viewSnackbar({
      view: false,
      message: ''
    }));
  };

  return (
    <div>
      {snackbar.view === true && (
        <MySnackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={snackbar.view}
          onClose={handleClose}
          autoHideDuration={2000}
       > 
        <>
          <p>
            {snackbar.message}
          </p>
          <IconButton className={classes.icon} size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
        </MySnackbar>
      )}
      
    </div>
  );
}

Snack.propTypes = {
  snackbar: PropTypes.array,
  viewSnackbar: PropTypes.func
}

export default Snack