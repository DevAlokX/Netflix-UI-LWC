import { LightningElement, api, track } from 'lwc';

const IMG_URL = "https://image.tmdb.org/t/p/w154"; // Image base URL

export default class RowComp extends LightningElement {
    @api rowrequest; // API request config
    @track movieCategories = []; // Store movies grouped by category

    connectedCallback() {
        console.log('rowRequest--->', this.rowrequest);
        if (this.rowrequest) {
            this.fetchMovies(this.rowrequest.fetchNetflixOrignals, "Netflix Originals");
            this.fetchMovies(this.rowrequest.fetchTrending, "Trending");
            this.fetchMovies(this.rowrequest.fetchActionMovies, "Action");
            this.fetchMovies(this.rowrequest.fetchComedyMovies, "Comedy");
            this.fetchMovies(this.rowrequest.fetchHorrorMovies, "Horror");
            this.fetchMovies(this.rowrequest.fetchRomanceMovies, "Romance");
            this.fetchMovies(this.rowrequest.fetchDocumentaries, "Documentaries");
        }
    }

    async fetchMovies(fetchUrl, category) {
        try {
            if (!fetchUrl) return; // Skip if URL is missing

            const response = await fetch(fetchUrl);
            const data = await response.json();
            console.log(`Fetched ${category} Movies:`, data);

            if (data.results && Array.isArray(data.results)) {
                const movies = data.results.map(movie => ({
                    id: `${category}-${movie.id}`,
                    name: movie.name ? movie.name.replace(/\s+/g, "") : "Unknown",
                    posterPath: movie.poster_path ? IMG_URL + movie.poster_path : ''
                }));

                // Add category-wise movies instead of flattening
                this.movieCategories = [...this.movieCategories, { category, movies }];
            } else {
                console.warn(`Invalid or empty ${category} Movies data`);
            }
        } catch (error) {
            console.error(`Error fetching ${category} Movies:`, error);
        }
    }
}
