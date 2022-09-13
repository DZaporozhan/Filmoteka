import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import refs from './refs';
import NewApiServise from './api-servise'
import { createMovieCard } from "./cardTemplates";


//ДЯКУЮ ВСІМ ЗА ДОПОМОГУ!!!!!!!!!!!

//перший варіант





// const newsApiServise = new NewApiServise();


// const options = {
//   totalItems: 20000,
//   itemsPerPage: 20,
//   visiblePages: 5,
//   centerAlign: true,
//   template: {
//     page: '<a href="#" class="tui-page-btn" style="color:#ff6b01;  border:1px solid transparent; border-radius:5px; width:40px; height:40px; display:inline-flex; align-items:center; justify-content:center;">{{page}}</a>',
//     currentPage:
//       '<strong class="tui-page-btn tui-is-selected" style="background-color: #ff6b01; border:1px solid transparent;border-radius: 5px; font-size: 12px; width:40px; height:40px; display:inline-flex; align-items:center; justify-content:center;">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"style="background-color:#F7F7F7; border-radius:5px; border:none;width:40px; height:40px; display:inline-flex; align-items:center; justify-content:center;">' +
//       '<span class="tui-ico-{{type}}" style="background-color:#F7F7F7; border:none">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}" style="background-color:#F7F7F7; border:1px solid transparent; border-radius:5px; width:40px; height:40px;display:inline-flex; align-items:center; justify-content:center;">' +
//       '<span class="tui-ico-{{type}}" style="border:none;">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}" style="display:none;">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// };

// export const pagination = new Pagination('pagination', options);


// const page = pagination.getCurrentPage();
// console.log(page);//повертає поточну сторінку


// pagination.on('afterMove',updatePagination)
// //pagination.on це як addEventListener додає слухача подій коли
// //ми клікаємо нашу бібліотеку визивається колбек
    
//     function updatePagination(e) {
//        const page = e.page;
//         console.log(page);

// newsApiServise.getTrendingMovies(page).then(({ results }) => {
     
//     const MakeUp = createMovieCard(results);

//             refs.mainList.innerHTML = MakeUp;
//             //   refs.mainList.insertAdjacentHTML('beforeend', MakeUp);
//         }).catch(error => console.log(error.message));
// };

// //визиваємо нашу функцію newsApiServise і передаємл туди новий currentPage


// export class UnSplash {
//     #BASE_URL = 'https://api.unsplash.com/search/photos';
//     #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
//     #searchParams = new URLSearchParams({
//         per_page: 15,
//         client_id: 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc',
//         color: 'black_and_white',
//         orientation: 'portrait',
//     })
//     #query
//     constructor() {
//         this.#query = '';
//     }
//     getPopularImage(page) {
//         const Url = `${this.#BASE_URL}?page=${page}&query=cats&${this.#searchParams}`
//         return fetch(Url).then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
//     }
//     getImagebyQuery(page) {
//         const Url = `${this.#BASE_URL}?page=${page}&query=${this.#query}&${this.#searchParams}`
//         return fetch(Url).then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
//     }
//     set query (newQuery){
//         this.#query=newQuery
//     }
// }











const options = {
    totalItems: 0,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
}
// повертає поточну сторінку


const container = document.querySelector('#pagination');
const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();
console.log(page);//повертає поточну сторінку


 const newsApiServise = new NewApiServise();


 newsApiServise.getTrendingMovies(page).then(({ results,total_results }) => {
     pagination.reset(total_results)
    const MakeUp = createMovieCard(results);

    refs.mainList.innerHTML = MakeUp;
    console.log(pages);
            //   refs.mainList.insertAdjacentHTML('beforeend', MakeUp);
        }).catch(error => console.log(error.message));


 pagination.on('afterMove',updatePagination)
//pagination.on це як addEventListener додає слухача подій коли 
//ми клікаємо нашу бібліотеку визивається колбек
    
    function updatePagination(e) {
       const currentPage = e.page;
        console.log(currentPage);

fetchRenderCard(currentPage).then(({results}) => {
    
    const MakeUp = createMovieCard(results);

            refs.mainList.innerHTML = MakeUp;
            //   refs.mainList.insertAdjacentHTML('beforeend', MakeUp);
        }).catch(error => console.log(error.message));
};

//визиваємо нашу функцію newsApiServise і передаємл туди новий currentPage

function fetchRenderCard(page) {
  key ='api_key=6fe1e9d5fbaeb01db6cc1b91ad7172fe'
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?${this.key}&page=${page}`
    
  ).then(response => {
  return response.json()
})
}


// function fetchRenderCard(page) {
//   key ='api_key=6fe1e9d5fbaeb01db6cc1b91ad7172fe'
//   return fetch(`https://api.themoviedb.org/3/search/movie?${this.key}&language=en-US&query=${this.searchQuery}&page=${page}&include_adult=false`
    
//   ).then(response => {
//   return response.json()
// })
// }










