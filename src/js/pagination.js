import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import refs from './refs';
import NewApiServise from './api-servise'
import { createMovieCard } from "./cardTemplates";


//ДЯКУЮ ВСІМ ЗА ДОПОМОГУ!!!!!!!!!!!

//перший варіант



const newsApiServise = new NewApiServise();


const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
  template: {
    page: '<a href="#" class="tui-page-btn" style="color:#ff6b01;  border:1px solid transparent; border-radius:5px; width:40px; height:40px; display:inline-flex; align-items:center; justify-content:center;">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected" style="background-color: #ff6b01; border:1px solid transparent;border-radius: 5px; font-size: 12px; width:40px; height:40px; display:inline-flex; align-items:center; justify-content:center;">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"style="background-color:#F7F7F7; border-radius:5px; border:none;width:40px; height:40px; display:inline-flex; align-items:center; justify-content:center;">' +
      '<span class="tui-ico-{{type}}" style="background-color:#F7F7F7; border:none">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}" style="background-color:#F7F7F7; border:1px solid transparent; border-radius:5px; width:40px; height:40px;display:inline-flex; align-items:center; justify-content:center;">' +
      '<span class="tui-ico-{{type}}" style="border:none;">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}" style="display:none;">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

export const pagination = new Pagination('pagination', options);


const page = pagination.getCurrentPage();
console.log(page);//повертає поточну сторінку


pagination.on('afterMove',updatePagination)
//pagination.on це як addEventListener додає слухача подій коли 
//ми клікаємо нашу бібліотеку визивається колбек
    
    function updatePagination(e) {
       const currentPage = e.page;
        console.log(currentPage);

newsApiServise.getTrendingMovies(currentPage).then(({ results }) => {
     
    const MakeUp = createMovieCard(results);

            refs.mainList.innerHTML = MakeUp;
            //   refs.mainList.insertAdjacentHTML('beforeend', MakeUp);
        }).catch(error => console.log(error.message));
};

//визиваємо нашу функцію newsApiServise і передаємл туди новий currentPage



// const options = {
//     totalItems: 0,
//     itemsPerPage: 20,
//     visiblePages: 5,
//     page: 1,
// }
//повертає поточну сторінку


// const container = document.querySelector('#pagination');
// const pagination = new Pagination(container, options);

// const pages = pagination.getCurrentPage();
// console.log(pages);//повертає поточну сторінку


//  const newsApiServise = new NewApiServise();


//  newsApiServise.getTrendingMovies(pages).then(({ results,total_results }) => {
//      pagination.reset(total_results)
//     const MakeUp = createMovieCard(results);

//     refs.mainList.innerHTML = MakeUp;
//     console.log(pages);
//             //   refs.mainList.insertAdjacentHTML('beforeend', MakeUp);
//         }).catch(error => console.log(error.message));


//  pagination.on('afterMove',updatePagination)
// //pagination.on це як addEventListener додає слухача подій коли 
// //ми клікаємо нашу бібліотеку визивається колбек
    
//     function updatePagination(e) {
//        const currentPage = e.page;
//         console.log(currentPage);

// newsApiServise.getTrendingMovies(currentPage).then(({results}) => {
    
//     const MakeUp = createMovieCard(results);

//             refs.mainList.innerHTML = MakeUp;
//             //   refs.mainList.insertAdjacentHTML('beforeend', MakeUp);
//         }).catch(error => console.log(error.message));
// };

// //визиваємо нашу функцію newsApiServise і передаємл туди новий currentPage


















