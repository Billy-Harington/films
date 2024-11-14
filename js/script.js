import { Genre } from "../components/Genre.js"
import { Movie, SetMovie } from "../components/Movie.js"
import { movies } from "./db.js"
import { reload } from "./utils.js"

const genres = ["All", ...new Set(movies.map(item => item.genre))] // set

const moviesPlace = document.querySelector('.promo__interactive-list')
const genresPlace = document.querySelector('.promo__menu-list ul')
const input = document.getElementById('search')


console.log(input);

SetMovie(movies[0])
reload(movies, moviesPlace, Movie)
reload(genres, genresPlace, Genre)


input.onkeyup = (e) =>{
 const value = e.target.value.trim().toLowerCase()

 const filtered = movies.filter(movie => {
    const title = movie.title.toLowerCase()
    if (title.includes(value)) {
        return movie
    }
})
reload(filtered, moviesPlace, Movie);
}