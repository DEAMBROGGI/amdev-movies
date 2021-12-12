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
import { resetResults } from '../actions';
import { getName } from 'domutils';





var searchResult= [];
const filterResult = [];
const result = [];

 const GetServerPPHD = (movieName,releaseDate, mediaType, trailer) => {

    

    
    
    let fechaLanzamiento = moment(releaseDate).format('MM/YYYY')
    let fechaTMDB = moment(releaseDate).format('DD/MM/YYYY')
    let referencia = ""
    if(mediaType==="movie"){
    referencia = "pelicula";
    }
    if(mediaType==="tv"){
    referencia = "serie";
    }

      axios.get(`https://pelisplushd.net/search?s=${movieName}`)
    .then( response => {
        let body = response.data
        let $ = cheerio.load(body)
        
        
$('body div#default-tab-1 div.Posters a ').map((index, element,respuesta) => {
            const $element = $(element);
            const id = $element.attr('href').replace(`https://pelisplushd.net/${referencia}/`, '').trim();
            if (id.indexOf('http') !== -1) {return id.indexOf('http') === -1}           
            const title = $element.find('div.listing-content p').text().trim();   
            if (title.indexOf("2"||"9")===-1 ) {return title.indexOf("2"||"9")===-1 }
            //if (id.indexOf((moment(releaseDate).format('YYYY'))) === -1) {return id.indexOf((moment(releaseDate).format('YYYY'))) === -1}
        
            searchResult.push({
                    id:id,
                    title:title,
                    })
        }) 
        console.log(searchResult)
        test(searchResult);
             
    }) 
      
     
    

    
    const filtrodos=[]

                 
           const test = async (searchResult)=>{

            

           if(searchResult.length>1){
            searchResult.map(movies => {
            axios.get(`https://pelisplushd.net/${referencia}/${movies.id}`)
          
            .then(response => {
              let body = response.data
              let $ = cheerio.load(body) 
             
            $('body div.card-body div.row.m-v-30 div.col-sm-4').eq(0).each((index, element) => {
                const $element = $(element);
                const tempReleaseDate = $element.find('div.sectionDetail.mb15').eq(4).text().trim();
                const releaseDate = tempReleaseDate.substring(tempReleaseDate.lastIndexOf(':') + 1);
                let fechaPagina = moment(releaseDate).format('MM/YYYY')
                let fechaBase = moment(releaseDate).format('DD/MM/YYYY')
                
               let data = {
                    id:movies.id,
                    releaseDate: fechaBase 
               };
             
            
            if(fechaPagina.indexOf(fechaLanzamiento) === -1) {return  data.releaseDate.indexOf(fechaLanzamiento) === -1};
            if(fechaBase.indexOf(fechaTMDB) === -1) {return data.releaseDate.indexOf(fechaTMDB) === -1}
            filterResult.push(data.id)
         
            var idServer = filterResult.toString()

            ServerMovie(idServer)
            console.log(idServer)
               
               
               
                //if(data.releaseDate === fechaLanzamiento){return promises.push(data)}
                /*if (countData.length >1 ) { data = {
                                            id: findUnique,
                                            releaseDate:fechaPagina === fechaLanzamiento}
  
                                            return promises.push(data) } 
                else{return promises.push(data)}*/
                
           
               /* if(promises.length > 1) {
                    if(fechaPagina === fechaLanzamiento){return promises.push(data)}
                   
                }*/
  
            });
            
            })


             



        })
     
     }
    
 }

 

    
    function ServerMovie(idServer){
    getMovieServers(idServer)
    .then(servers =>{
      
       console.log(servers)
       result.push(servers)
      

    })
    }
         
        
      /*  if(filterNoMovies[0].length === 1){ result.push(filterNoMovies)}
        if(filterNoMovies[0].length > 1){
        const filterid =  selectIDmovie(filterNoMovies[0], referencia, fechaLanzamiento, fechaTMDB);
        let test =  [...new Set(filterid)]
        
       




        
       }       
        */
       
      
       
   
        
 




  
   /* function requireServer(){

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
        
          
               
           }

    }  
 

*/

return result

 }



 export default GetServerPPHD;

//const  [value, setValue] = React.useState(`https://www.youtube.com/embed/${ video}`);
//let fechaSeleccionada = moment(selectedReleaseDate).format('MM/YYYY');

// DEFINO LAS DOS VARIANTES DE TEXTO TOMADO DSEDE EL ID DE MOVIE, LO PASO A MINUSCULA Y LO SEPARO EN GUINES




/*
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




console.log(value)
console.log(trailer)
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
)*/
