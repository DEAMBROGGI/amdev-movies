import React, { useEffect, useLayoutEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { getMovieServers, getSeriesServersBySeason} from 'pelisplushd/dist/api/api';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import * as cheerio from 'cheerio';
import { style } from "@mui/system";
import Button from '@mui/material/Button';
import moment from 'moment'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



 function PPHSServer(){

const {movie, video, mediaType, seasonSelected, episodeSelected}= useSelector(state => state.movieReducer);
const selectedReleaseDate=movie.release_date;
const  [value, setValue] = React.useState(`https://www.youtube.com/embed/${ video}`);
let fechaSeleccionada = moment(selectedReleaseDate).format('MM/YYYY');
let [titleSelected,setTitleSelected] = React.useState();
let [serverList,setServerList] = React.useState();
// DEFINO LAS DOS VARIANTES DE TEXTO TOMADO DSEDE EL ID DE MOVIE, LO PASO A MINUSCULA Y LO SEPARO EN GUINES
let spanishName = movie.title //NOMBRE EN ESPAÑOL
let englishName = movie.original_name //NOMBRE EN INGLES

let trailer = `https://www.youtube.com/embed/${video}`

let Idresult =[];
let tempPromises = [];
let referencia = ""
if(mediaType==="movie"){
referencia = "pelicula";
}
if(mediaType==="tv"){
referencia = "serie";
}
let title = ""

/*useEffect(() => {
  searchIDPP()
  selectIDmovie()

}, [video, titleSelected]);
*/

function searchIDPP (){   
 

   axios.get(`https://pelisplushd.net/search?s=${englishName}`)
    .then( response => {
    let body = response.data
    let $ = cheerio.load(body)
    let union = ""
    let searchResult = [];
    
      console.log(referencia)
      console.log(mediaType)
      const promise = $('body div#default-tab-1 div.Posters a ').map((index, element) =>  {
      const $element = $(element);
      
     
      const id = $element.attr('href').replace(`https://pelisplushd.net/${referencia}/`, '').trim();
      const title = $element.find('div.listing-content p').text().trim();
      
       searchResult.push({
        id:id,
        title:title,

      })
      Idresult.push(id)
      console.log(searchResult)
      
    });

    selectIDmovie(); 

}).catch(e => {console.log(e)})


}

async function  selectIDmovie(){
  if(Idresult.length >1){
  
  Idresult.map(id =>{
    // BUSCAR FECHA DE LANZAMIENTO EN PELIPLUSHD PARA COMPARAR RESULTADOS
     axios.get(`https://pelisplushd.net/${referencia}/${id}`)
        
      .then(response => {
        let body = response.data
        let $ = cheerio.load(body) 
       
        const promises = {};
        $('body div.card-body div.row.m-v-30 div.col-sm-4').eq(0).each((index, element) => {
            const $element = $(element);
            const tempReleaseDate = $element.find('div.sectionDetail.mb15').eq(4).text().trim();
            const releaseDate = tempReleaseDate.substring(tempReleaseDate.lastIndexOf(':') + 1);
            let fechaPagina = moment(releaseDate).format('MM/YYYY')
            let data = {
                id:id,
                releaseDate: fechaPagina,
            };
            tempPromises.push(data)
            console.log(tempPromises)
        });
        let sameMovie = tempPromises.filter(item=>item.releaseDate === fechaSeleccionada)
        title=sameMovie[0].id
        console.log(title)
        setTitleSelected(sameMovie[0].id)
        requireServer()
        
    }).catch(e => {console.log(e)})
    
    
    })
  }
  if(Idresult.length === 1){
    title=Idresult[0]
    
    console.log(title)
    setTitleSelected(Idresult[0])
   requireServer()
  
  }


}
let server =[]
let servidores = server[0]
function requireServer(){

if(mediaType === "tv"){

    getSeriesServersBySeason([title], [seasonSelected]) 
      .then(servers =>{
let episodios = servers[0].episodes
let episodeServer = episodios.filter(episodio => episodio.episode === Number(episodeSelected))
server=episodeServer[0].servers
console.log (server)
setServerList(episodeServer[0].servers)
      }).catch(e => {console.log(e)})   
}  
if(mediaType === "movie"){

 async function MovieServer(){
 
 await getMovieServers(titleSelected)
     .then(servers =>{
    setServerList(servers)
    console.log(servers)
    console.log(serverList)
    console.log(video)
  
 if(video === undefined){
   setValue(servers[0].url)

 }
 if(video){setValue(trailer)}
  })
  
};
MovieServer()
}
}
let serverSelected=""
const Servers = (event, newValue) => {
  setValue(newValue);
  console.log(newValue)
  console.log(serverList)
  console.log(value)
  serverSelected=newValue
  console.log(serverSelected)
  

};





return(
    <>

 <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
 
      <Tabs value={value} onChange={Servers} centered>
      <Tab key="trailer" label= "Trailer" value={trailer} />
      {serverList?.map((item, index) =>
        <Tab key={item.name} label= {item.name} value={item.url}/>
        
        )}
      </Tabs>
       
    </Box>
                      
    {serverList !=undefined &&
                    <div className="frameContent">
                       
                       <iframe 
                            className="frame"
                            src={value}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen 
                          />
                      
                        </div>
}
    </>
)
}
export default PPHSServer;