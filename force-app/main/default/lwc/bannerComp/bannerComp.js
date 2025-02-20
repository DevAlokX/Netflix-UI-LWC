import { LightningElement,api,track } from 'lwc';

export default class BannerComp extends LightningElement {
    @api request;

    @track movie = {}; // Store movie data

    connectedCallback() {
        console.log('inside BannerComp connectedCallback-->',this.request);
        this.fetchNetflixOriginals();
    }

    async fetchNetflixOriginals() {
        try {
            const response = await fetch(this.request.fetchNetflixOrignals); // Replace with actual API endpoint
            const data = await response.json();

            console.log('api data-->', data);

            if (data.results && data.results.length > 0) {
                const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];

                console.log('random movie ---->', randomMovie)
                this.template.querySelector('.banner').style.backgroundImage =
                    `url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})`;

                this.template.querySelector('.banner__description').innerText =
                    this.truncate(randomMovie.overview, 150);

                this.template.querySelector('.banner__title').innerText =
                randomMovie.name;
            }
        } catch (error) {
            console.error('Error fetching Netflix Originals:', error);
        }
    }

    truncate(str, n) {
        return str && str.length > n ? str.substr(0, n - 1) + '...' : str;
    }
}