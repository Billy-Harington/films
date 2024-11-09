const categories = {
    Фильмы: {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ],
        bgImage: "./img/bg.jpg",
        genre: "Драма",
        title: "МАРСИАНИН",
        description: "ИСТОРИЯ ЧЕЛОВЕКА, ВЫЖИВШЕГО НА ЧУЖОЙ ПЛАНЕТЕ В ОДИНОЧКУ",
        ratings: { IMDb: "8.0", Кинопоиск: "7.7" }
    },
    Сериалы: {
        movies: [
            "Друзья",
            "Во все тяжкие",
            "Очень странные дела",
            "Игра престолов",
            "Мандалорец"
        ],
        bgImage: "./img/series.jpg",
        genre: "Комедия",
        title: "ВО ВСЕ ТЯЖКИЕ",
        description: "СЕРИАЛ О ХИМИКЕ, СТАВШЕМ НАРКОБАРОНОМ",
        ratings: { IMDb: "9.5", Кинопоиск: "9.0" }
    },
    Мультфильмы: {
        movies: [
            "Король Лев",
            "Холодное сердце",
            "Шрек",
            "Тачки",
            "Зверополис"
        ],
        bgImage: "./img/cartoon.jpg",
        genre: "Комедия",
        title: "Трансформеры Один Начало",
        description: "Мультфильм о начале гибели планкты Кибертрон",
        ratings: { IMDb: "9.9", Кинопоиск: "9.4" }
    },
    Клипы: {
        movies: [
            "Клип 1",
            "Клип 2",
            "Клип 3",
            "Клип 4",
            "Клип 5"
        ],
        bgImage: "./img/clip.jpg",
        genre: "Клипы",
        title: "Клипы",
        description: "Наслаждайтесь музыкой",
        ratings: { IMDb: "none", Кинопоиск: "none" }
    },
    Трейлеры: {
        movies: [
            "Трейлер 1",
            "Трейлер 2",
            "Трейлер 3",
            "Трейлер 4",
            "Трейлер 5"
        ],
        bgImage: "./img/trailer.jpg",
        genre: "Игра",
        title: "Far Cry 3",
        description: "А я вам говорил что такое безумие?",
        ratings: { IMDb: "9.5", Кинопоиск: "9.0" }
    }
   
};


const ad = document.querySelector('.promo__adv')
console.log(ad);

const pic = ad.querySelectorAll('img')

pic.forEach(img=>{
    img.remove()
})


const form = document.forms.namedItem('add');
const inp = form.querySelector('.adding__input');
let currentCategory = 'Фильмы';
form.onsubmit = (event) => {
    event.preventDefault();
    const newFilm = inp.value.trim();

    if (newFilm) {
        
        categories[currentCategory].movies.push(newFilm);
      
        updateMovieList(currentCategory);

        inp.value = ""; 
    }
};

const promo__bg = document.querySelector('.promo__bg');
const promoGenre = document.querySelector('.promo__genre');
const promoTitle = document.querySelector('.promo__title');
const promoDescr = document.querySelector('.promo__descr');
const promoRatings = document.querySelector('.promo__ratings');
const promo__interactive_list = document.querySelector('.promo__interactive-list');



//имена фильмов
function Movies(name) {
    const movie = document.createElement('li');
    const del = document.createElement('div');


    movie.classList.add("promo__interactive-item");
    del.classList.add('delete');


    movie.textContent = name;


    promo__interactive_list.append(movie);
    movie.append(del);


    del.onclick = () => {
        movie.remove();
    };
}



//для обновления информации о фильме
function updateMovieList(category) {
    const selectedCategory = categories[category];

  
    promo__bg.style.background = `url("${selectedCategory.bgImage}") center center / cover no-repeat`;
    promoGenre.textContent = selectedCategory.genre; 
    promoTitle.textContent = selectedCategory.title;
    promoDescr.textContent = selectedCategory.description;
    promoRatings.innerHTML = `
        <span>IMDb: ${selectedCategory.ratings.IMDb}</span>
        <span>Кинопоиск: ${selectedCategory.ratings.Кинопоиск}</span>
    `;


    promo__interactive_list.innerHTML = "";
    selectedCategory.movies.forEach(movie => Movies(movie));
}


//взято из проэкта Food
const categoryLinks = document.querySelectorAll('.promo__menu-item');
categoryLinks.forEach(link => {
    link.onclick = (event) => {
        event.preventDefault();
        const selectedCategory = link.textContent;
        categoryLinks.forEach(link => link.classList.remove('promo__menu-item_active'));
        link.classList.add('promo__menu-item_active');
        updateMovieList(selectedCategory);
    };
});
