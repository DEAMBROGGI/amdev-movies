import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {initialState} from './reducers'
import moment from 'moment'

    let fecha = new Date(); //Fecha actual
    let today = moment(fecha).format('YYYY-MM-DD')   
    console.log(today)


const url = 'https://api.themoviedb.org/3/';
const apiKey = '?api_key=d4be0a070609a82f261c06e7d2bd0600';


//listado tendencia pagina HOME, identificado por tipo tv o movie 
export const getMovieTop = (page, mediaType) => {
if(page) return (axios.get(`${url}trending/${mediaType}/week${apiKey}&page=${page}&language=es-ES`))
else return (axios.get(`${url}trending/${mediaType}/week${apiKey}&language=es-ES`))
}
//LIstado de populares pagina HOME
export const getMovieLastAdd = (page, mediaType) => axios.get(`${url}discover/${mediaType}${apiKey}&language=es-ES&sort_by=vote_count.desc&include_adult=false&include_video=true&page=${page}&release_date.lte=${today}&with_watch_monetization_types=flatrate`);
//
export const getMovieId = (id, mediaType) => axios.get(`${url}${mediaType}/${id}${apiKey}&language=es-ES`);

export const getSearch = (key) => axios.get(`${url}search/multi${apiKey}&query=${key}&language=es-ES&page=1&include_adult=false`);
//trae una lista de generos
export const getGenres = (mediaType) => axios.get(`${url}genre/${mediaType}/list${apiKey}&language=es-ES`);
//trae una lista de peliculas segun el genero
export const getMovieGenre = (genre, mediaType) => axios.get(`${url}discover/${mediaType}${apiKey}&sort_by=popularity.desc&page=1&with_genres=${genre}&language=es-ES`);
//trae comentarios de una pelicula en concreto
export const getReviews = (idPelicula, mediaType) => axios.get(`${url}${mediaType}/${idPelicula}/reviews${apiKey}&page=1&language=es-ES`);
//trae el trailer offical de una pelicula
export const getVideo = (idPelicula, mediaType) => axios.get(`${url}${mediaType}/${idPelicula}/videos${apiKey}&language=en-EU`);
//trae el trailer offical de una pelicula
export const getVideoCard = (idPelicula, mediaType) => axios.get(`${url}${mediaType}/${idPelicula}/videos${apiKey}&language=en-EU`);
//trae una lista de peliculas recomendadas
export const getRecommen = (idPelicula, mediaType) => axios.get(`${url}${mediaType}/${idPelicula}/recommendations${apiKey}&language=es-ES`);
//trae una lista de peliculas recomendadas
export const getSimilar = (idPelicula, mediaType) => axios.get(`${url}${mediaType}/${idPelicula}/similar${apiKey}&language=es-Es&page=1`);
//Consultar temporadas y episodios
export const getSeasons = (idSeason, seasonSelect) =>axios.get(`${url}tv/${idSeason}/season/${seasonSelect}?api_key=d4be0a070609a82f261c06e7d2bd0600&language=es-Es`)
