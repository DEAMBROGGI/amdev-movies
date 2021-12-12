import {getMovieServers} from 'pelisplushd/dist/api/api';
import axios from "axios";
import * as cheerio from 'cheerio';
import moment from 'moment'

let referencia;  
export async function  GetServerPPHD  (movieName,releaseDate, mediaType){ 
  
    if(mediaType==="movie"){referencia = "pelicula"}
    if(mediaType==="tv"){referencia = "serie"}  
                
    let Idresult;
    let searchResult=[]
    
    let response = await axios.get(`https://pelisplushd.net/search?s=${movieName}`)
    let body = response.data
    let $ = cheerio.load(body)
        console.log(searchResult)
            $('body div#default-tab-1 div.Posters a ').map((index, element,respuesta) => {
            const $element = $(element);
            const id = $element.attr('href').replace(`https://pelisplushd.net/${referencia}/`, '').trim();
            if (id.indexOf('http') !== -1) {return id.indexOf('http') === -1}           
            const title = $element.find('div.listing-content p').text().trim();   
            if (title.indexOf("2"||"9")===-1 ) {return title.indexOf("2"||"9")===-1 }
            //if (id.indexOf((moment(releaseDate).format('YYYY'))) === -1) {return id.indexOf((moment(releaseDate).format('YYYY'))) === -1}
        
            searchResult.push({id:id, title:title})
       
            console.log(searchResult)
            });

if(searchResult.length ===0){ return Idresult = []}
           
if(searchResult.length >1){
    let data = await selectIDmovie(releaseDate,searchResult)  
    return Idresult = data 
}
else {
  let id=searchResult[0].id
  let serv  = await  ServerMovie(id)
  console.log (serv)
        return    Idresult = serv
}


}

export async function  selectIDmovie(releaseDate, req){

    let fechaLanzamiento = moment(releaseDate).format('MM/YYYY')
    let fechaTMDB = moment(releaseDate).format('DD/MM/YYYY')
    
  
    
   const servers = new Promise(async (resolve) => req.map( async movies => {
    // BUSCAR FECHA DE LANZAMIENTO EN PELIPLUSHD PARA COMPARAR RESULTADOS
        let request =  await axios.get(`https://pelisplushd.net/${referencia}/${movies.id}`)
        let body = await request.data
        let $ = cheerio.load(body) 
       
        let serverList;
        $('body div.card-body div.row.m-v-30 div.col-sm-4').eq(0).each(async (index, element) => {
            const $element = $(element);
            const tempReleaseDate = $element.find('div.sectionDetail.mb15').eq(4).text().trim();
            const releaseDate = tempReleaseDate.substring(tempReleaseDate.lastIndexOf(':') + 1);
            let fechaPagina = moment(releaseDate).format('MM/YYYY')
            let fechaBase = moment(releaseDate).format('DD/MM/YYYY')
            let data = {
                id:movies.id,
                releaseDate: fechaPagina,
            };
            if(fechaPagina.indexOf(fechaLanzamiento) === -1) {return  data.releaseDate.indexOf(fechaLanzamiento) === -1};
            if(fechaBase.indexOf(fechaTMDB) === -1) {return data.releaseDate.indexOf(fechaTMDB) === -1}
            let serv  = await  ServerMovie(data.id)
            serverList = serv
        
        resolve(serv)
        return serverList
      
        });
        
    }))

  return servers
  



}
export default async function ServerMovie(req){
 let serverList;  

   await getMovieServers(req)
    .then(servers=>{

return serverList = servers
    })
return serverList
 
}









