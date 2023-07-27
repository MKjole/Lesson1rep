"use strict";

let number0fFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};