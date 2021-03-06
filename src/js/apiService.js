const API_KEY = '6lOpp5Vggq59Gw99EgHfgH1fvYexhNFu';
// const API_KEY = 'w2rp7JjXdCoAjtGRKPPDY9cIXNULMVug';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';

export default class ApiService {
    constructor() {
        this.searchQuery = '';
        // this.page = 1;
     }        

    apiService() {
        const URL = `${BASE_URL}keyword=art&source=${this.searchQuery}&apikey=${API_KEY}`;
        return fetch(URL)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Error fatching data')
            })
            .then(({ _embedded }) => {
                this.page += 1;
                return _embedded.events;
            })
            .catch(error => console.log(error)
            )        
    }

    // resetPage() {
    //     this.page = 1;
    // }

    get query() {
        return this.searchQuery
    }

    set query(newQuery) {        
        this.searchQuery = newQuery;
    }
}