import { LightningElement,api,track} from 'lwc';

const img_url = "https://image.tmdb.org/t/p/w300";

export default class RowComp extends LightningElement {
@api rowrequest

@track request = this.rowrequest;

connectedCallback(){
    console.log('rowRequest--->',this.rowrequest);
    console.log('Request--->',this.request);
    if(this.rowrequest){
    this.fetchlistofmovies();}
}

fetchlistofmovies(){
    //this.fetchTrending(this.rowrequest.fetchTrending);
    this.fetchNetflixOrignals(this.rowrequest.fetchNetflixOrignals);
//     this.fetchActionMovies(this.rowrequest.fetchActionMovies);
//     this.fetchComedyMovies(this.rowrequest.fetchComedyMovies);
//     this.fetchHorrorMovies(this.rowrequest.fetchHorrorMovies);
//     this.fetchRomanceMovies(this.rowrequest.fetchRomanceMovies);
//     this.fetchDocumentaries(this.rowrequest.fetchDocumentaries);
}

async fetchNetflixOrignals(fetchNetflixOrignals) {
    try {
        const response = await fetch(fetchNetflixOrignals); // Replace with actual API endpoint
        const data = await response.json();

        console.log('fetchNetflixOrignals api data-->', data);
        const netflixData = { ...data, results: [...data.results] };
        console.log('netflixDAta==>',JSON.parse(JSON.stringify(data)));
        

        if (data.results && data.results.length > 0) {
            console.log('Array is array===>',Array.isArray(data.results));

           
             if (!Array.isArray(data.results) || data.results.length === 0) {
                console.warn("Netflix Originals data is missing or empty:", data.results);
                return;
            }
            const parsedResults = data.results.map(movie => Object.assign({}, movie));


            console.log('Extracted Results:', parsedResults);

            const headrow = this.template.querySelector('.headrow');
            const row = document.createElement("div");

            row.className = "row";
            row.classList.add("netflixrow");
            headrow.appendChild(row);

            
            const title = document.createElement("h2");
            title.className = "row__title";
            title.innerText = "NETFLIX ORIGINALS";

            row.appendChild(title);

            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);

            parsedResults.forEach((movie) => {

                const poster = document.createElement("img");
                poster.className = "row__posterLarge";
          
                var s = movie.name.replace(/\s+/g, "");
          
                poster.id = s;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);
              });
            }
    } catch (error) {
        console.error('Error fetching Netflix Originals:', error);
    }
}

truncate(str, n) {
    return str && str.length > n ? str.substr(0, n - 1) + '...' : str;
}



}