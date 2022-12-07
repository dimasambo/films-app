import films from '../data/films.json'
import {FilmType} from "../types/types";

export const filmsLength = films.films.length

export const api = {
    getFilms(page = 1, size = 20) {
        const data: Array<FilmType> = films.films.filter((film, index) => index >= ((page - 1) * size) && index < (size * page));
        return data;
    }
}