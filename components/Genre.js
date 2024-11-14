import { movies } from "../js/db.js"
import { reload } from "../js/utils.js"
import { Movie, SetMovie } from "./Movie.js"

function Genre(genre) {
    const li = document.createElement('li')
    const link = document.createElement('a')

    link.classList.add('promo__menu-item')
    link.innerHTML = genre
    link.href = "#"

    if (genre === 'All') {
        link.classList.add('promo__menu-item_active')
    }

    li.append(link)

    li.onclick = () => {
        const moviesPlace = document.querySelector('.promo__interactive-list')

        const links = document.querySelectorAll('.promo__menu-item')
        links.forEach(el => el.classList.remove("promo__menu-item_active"))
        link.classList.add('promo__menu-item_active')

        if (genre === "All") {
            reload(movies, moviesPlace, Movie);
            SetMovie(movies[0])
            return
        }

        const filtered = movies.filter(movie => {
            if (movie.genre === genre) {
                return movie
            }
        })

        SetMovie(filtered[0])
        reload(filtered, moviesPlace, Movie);
    }

   
    return li
}

export { Genre }