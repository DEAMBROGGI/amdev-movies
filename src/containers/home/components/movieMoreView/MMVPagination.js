import React, { useEffect, useLayoutEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {callPage, callTop, addPage} from '../../../../core/Movie/actions';

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: 0,
    zIndex: 200,
    backgroundColor: "#fff",
    padding: "10px 80px",

    color: "white",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
}));

const MMVPagination = ({pageNumber }) => {
  const dispatch = useDispatch();
  
  const page = useSelector(state => state.movieReducer.page)
  const [numberPage, setPage] = React.useState(page);
 
  const classes = useStyles();
  //handle change
  const handleChange = (event, value) => {
    setPage(value);
    
    dispatch(addPage(value))
    dispatch(callTop(value))

    window.scroll(0, 0);
  };

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Pagination
          page={numberPage}
          onChange={handleChange}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          variant="outlined"
          count={pageNumber}
        />
      </div>
    </div>
  );
};

export default MMVPagination;
