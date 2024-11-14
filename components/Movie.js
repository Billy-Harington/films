function Movie(data) {
    const li = document.createElement('li')
    const del = document.createElement('div')

    li.classList.add('promo__interactive-item')
    del.classList.add('delete')

    li.innerHTML = data.title

    li.append(del)

    li.onclick = () => SetMovie(data)
    const form = document.forms.namedItem('form'),
    inp = form.querySelector('input')

form.onsubmit = (event) => {
    event.preventDefault()
     if (inp.value.includes(data.title)) {
        li.innerHTML = data.title
    }
}
   

    return li
}


function SetMovie(data) {
    const promo__genre = document.querySelector('.promo__genre'),
        promo__title = document.querySelector('.promo__title'),
        promo__descr = document.querySelector('.promo__descr'),
        bg = document.querySelector('.promo__bg'),
        [imdb, kinopoisk] = document.querySelectorAll('.promo__ratings span');

    bg.style.background = `url("${data.poster}") center center/cover no-repeat`
    promo__genre.innerHTML = data.genre
    promo__title.innerHTML = data.title
    promo__descr.innerHTML = data.director
    imdb.innerHTML = `IMDB: ${data.imdb}`
    kinopoisk.innerHTML = `Кинопоиск: ${data.kinopoisk}`
}

export { Movie, SetMovie }