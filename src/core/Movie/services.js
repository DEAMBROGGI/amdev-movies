import axios from 'axios';
import MMVPagination from "../../containers/home/components/movieMoreView/MMVPagination";


const url = 'https://api.themoviedb.org/3/';
const apiKey = '?api_key=d4be0a070609a82f261c06e7d2bd0600';



export const getMovieTop = (page) => {

if(page) return (axios.get(`${url}trending/movie/week${apiKey}&page=${page}&language=es-ES`))
else return (axios.get(`${url}trending/movie/week${apiKey}&language=es-ES`))
}
//
export const getMovieId = (id, mediaType) => axios.get(`${url}${mediaType}/${id}${apiKey}&language=es-ES`);
export const getSearch = (key) => axios.get(`${url}search/multi${apiKey}&query=${key}&language=es-ES&page=1&include_adult=false`);
//trae una lista de generos
export const getGenres = () => axios.get(`${url}genre/movie/list${apiKey}&language=es-ES`);
//trae una lista de peliculas segun el genero
export const getMovieGenre = (genre) => axios.get(`${url}discover/movie${apiKey}&sort_by=popularity.desc&page=1&with_genres=${genre}&language=es-ES`);
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