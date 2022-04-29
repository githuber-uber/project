/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        
        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);  
        }


        event.target.reset();    
    })

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;

        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                
                createMovieList(films, parent);
            })
        });

    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
})

// 'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const adBlocks = document.querySelector('.promo__adv').querySelectorAll('img');

// adBlocks.forEach(item => {
//     item.remove();
// });

// const genre = document.querySelector('div.promo__genre');

// genre.textContent = 'драма';

// const bg = document.querySelector('div.promo__bg');

// bg.style.backgroundImage = "url('img/bg.jpg')";

// const films = document.querySelectorAll('.promo__interactive-item');

// movieDB.movies.sort();

// films.forEach((film, i) => {
//     film.innerHTML = `${i+1}.${movieDB.movies[i]}`;
// });

// const adv = document.querySelectorAll('.promo__adv img'),
//       poster = document.querySelector('.promo__bg'),
//       genre = poster.querySelector('.promo__genre'),
//       movieList = document.querySelector('.promo__interactive-list'),
//       addForm = document.querySelector('form.add'),
//       submitBtn = addForm.querySelector('button'),
//       newFilm = addForm.querySelector('input.adding__input'),
//       checkbox = addForm.querySelector('[type="checkbox"]');

// adv.forEach(item => {
//     item.remove();
// });

// genre.textContent = 'драма';

// poster.style.backgroundImage = 'url("img/bg.jpg")';

// movieList.innerHTML = "";

// function sortArr(arr) {
//     arr.sort();
// }

// sortArr(movieDB.movies);

// function addFilm(entry, arr) {
//     if (entry.length > 21) {
//         entry = `${entry.substr(0, 21)}...`;
//     }
//     if (checkbox.checked) {
//         console.log("Добавляем любимый фильм");
//     }
//     arr.push(entry);
//     sortArr(arr);
// }

// function makeList(entry, arr) {
//     if (newFilm.value) {
//        addFilm(newFilm.value, movieDB.movies);
//     }
//     movieList.innerHTML = '';
//     arr.forEach((film, i) => {
//         sortArr(arr);
//         movieList.innerHTML += `
//             <li class="promo__interactive-item">${i + 1} ${film}
//                 <div class="delete"></div>
//             </li>
//         `; 
//     });
//     document.querySelectorAll('.delete').forEach((bin, i) => {
//         bin.addEventListener('click', () => {
//             bin.parentElement.remove();
//             movieDB.movies.splice(i, 1);

//             makeList(newFilm.value, movieDB.movies);
//         })
//     }) 
// }

// makeList(newFilm.value, movieDB.movies);
// submitBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     makeList(newFilm.value, movieDB.movies);
    
// });

// movieDB.movies.forEach((film, i) => {
//     sortArr(movieDB.movies);
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;

// });