import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { callGenre, callLastAdd, callTop } from '../../core/Movie/actions';
import img from '../../static/logo.png'
import logo from "../../static/amdev.svg"
import { ADD_MEDIA_TYPE, ADD_MOVIE } from '../../core/Movie/types';
import { addSearch, resetResults, callSearch} from '../../core/Movie/actions';
// material ui
import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from  '@material-ui/core/Box';import { color } from '@mui/system';
;


function NavBar() {
  const classes = useStyles();
  const {top,mediaType, genres} = useSelector(state => state.movieReducer);
 

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
/* 
  useCallBack:
     permite que cuando cambie la variable o varaibles declaradas se vualva a reenderizar dicha funcion
     Esto solo es a modo de ejemplo ya que al ser un hook tiene un mayor gasto de memoria, y solo se debe
     de utilizar cuando la funcion es mas pesada que el utilziar un hook
*/function mediaTypeSelect (event) {
  
  dispatch({
    type:ADD_MEDIA_TYPE,
    mediaType:event.currentTarget.name
  })
  
  
  dispatch(callTop(1,event.currentTarget.name))
  dispatch(callLastAdd(1,event.currentTarget.name))
  dispatch(callGenre(event.currentTarget.name))
  dispatch(resetResults())
  dispatch(addSearch(""))
  dispatch(callSearch(""))

  let peliculas = document.querySelector("button[name='movie']")
  let series = document.querySelector("button[name='tv']")
  if(event.currentTarget.name === "movie")
  { return peliculas.style.backgroundColor ="#004d40",
           series.style.backgroundColor="#081c24"
}
  if(event.currentTarget.name === "tv")
  { return peliculas.style.backgroundColor="#081c24",
           series.style.backgroundColor="#004d40"
}
  
}


  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
    dispatch(resetResults())
    dispatch(addSearch(""))
    dispatch(callSearch(""))
  }, [anchorEl]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  },[anchorEl]);

  useEffect(() => {
    dispatch(callGenre(mediaType))
  }, []);

  function clearSearch(){
    dispatch(resetResults())
    dispatch(addSearch(""))
    dispatch(callSearch(""))
   
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar className={classes.toolbar}>
       <div style={{width:'20vw'}}>
          <Link className="a " to="/"className={classes.title} onClick={clearSearch}>
            <img src={img} className={" unselectable "+ classes.menuButton}/> 
            <img src={logo} className={classes.menuButton} />
          </Link>
          </div>
          

         
            <div style={{width:'60vw', display:'flex', justifyContent:'center'}}>
            <Link className="a " to="/"className={classes.title}>
              <Button className={classes.btnMediaType} onClick={mediaTypeSelect} name='movie'>
                Peliculas
              </Button >
              <Button className={classes.btnMediaType} onClick={mediaTypeSelect} name='tv'>
                Series
              </Button>
            </Link>
            </div>
            
            <div style={{width:'20vw', display:'flex', justifyContent:'flex-end'}} >
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
              style={{color:"black"}}
            >
              {genres && genres.map(element => (
                <Link 
                  to={`/genero/${element.name}`}
                  key={element.id}
                  style={{color:"black"}}
                >
                <MenuItem 
                  onClick={handleClose}
                  style={{color:"black", fontWeight:800, lineHeight:0.9 }}
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
