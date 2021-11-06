import React from 'react';
import Routes from './routes';
import NavBar from './components/navBar/NavBar'
import Snackbar from './components/snackbar/Snackbar'
import './css/body.css'

/*
  importo los componentes que van a ser utilizados en toda la app 
  y en el mismo nivel pongo las rutas que van a ser llamadas
*/
function App() {
  return (
    <>
      <Snackbar />
      <NavBar />
      <Routes />
      
    </>
  );
}

export default App;