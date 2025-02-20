import { LightningElement, track} from 'lwc';


const api = "api_key=84399091fc61970e3402da4d6be1e997";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300"; // You can change "w185" to your preferred size


// requests for movies data

const requests = {

  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

export default class NetflixMainComponent extends LightningElement {

        @track movierequests = requests;

    connectedCallback(){
        console.log('main component requests -->', JSON.parse(JSON.stringify(this.movierequests)));
        
    }
    
    
}