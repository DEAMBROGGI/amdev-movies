import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { callGenre } from '../../core/Movie/actions';
import img from '../../static/logo.png'
import logo from "../../static/amdev.svg"
// material ui
import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from  '@material-ui/core/Box';;


function NavBar() {
  const classes = useStyles();

  const genres = useSelector(state => state.movieReducer.genres);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
/* 
  useCallBack:
     permite que cuando cambie la variable o varaibles declaradas se vualva a reenderizar dicha funcion
     Esto solo es a modo de ejemplo ya que al ser un hook tiene un mayor gasto de memoria, y solo se debe
     de utilizar cuando la funcion es mas pesada que el utilziar un hook
*/
  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, [anchorEl]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  },[anchorEl]);

  useEffect(() => {
    dispatch(callGenre())
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar className={classes.toolbar}>
          <Link className="a" to="/"className={classes.title}>
            <img src={img} className={classes.menuButton}/> 
            <img src={logo} className={classes.menuButton} />
          </Link>
          <div>
            <Button  
              aria-controls="simple-menu" 
              aria-haspopup="true" 
              onClick={handleClick} 
              className={classes.menu}
            >
              Categorias
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {genres && genres.map(element => (
                <Link 
                  to={`/genero/${element.name}`}
                  key={element.id}
                >
                <MenuItem 
                  onClick={handleClose}
                >
                  {element.name}
                </MenuItem>
              </Link>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  genres: PropTypes.array,
  callGenre: PropTypes.func
}
export default NavBar;
