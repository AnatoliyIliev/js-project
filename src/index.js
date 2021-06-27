import './sass/main.scss';
import cardContainer from './templates/cards.hbs';
import ApiService from './js/apiService';
import getRefs from './js/get-refs';
// import debounce from 'lodash.debounce';

var debounce = require('lodash.debounce');

const refs = getRefs();

const newApiService = new ApiService();

refs.searchInput.addEventListener('input', debounce(onSearch, 500));

console.log(newApiService.apiService())

function onSearch(e) {
    console.log(e);
    e.preventDefault();
   
    newApiService.query = e.currentTarget; 
 
    newApiService.resetPage();  
    clearContainer();
    fetchArticles();        
}

function fetchArticles() {  
  newApiService.apiService()
      .then(gallery => {        
        buildListMarkup(gallery);
      })
      .catch('error'); 
}

function buildListMarkup(cards) {
  refs.cardContainer.insertAdjacentHTML('beforeend', cardContainer(cards));  
}

function clearContainer() {
  refs.cardContainer.innerHTML = '';
}