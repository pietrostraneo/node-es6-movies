// Array of objects representing movies and TV shows
const mediaArray = [
    { title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 8.8, type: 'movie' },
    { title: 'Breaking Bad', year: 2008, genre: 'Drama', rating: 9.5, type: 'tv', seasons: 5 },
    { title: 'The Matrix', year: 1999, genre: 'Sci-Fi', rating: 8.7, type: 'movie' },
    { title: 'Friends', year: 1994, genre: 'Comedy', rating: 8.9, type: 'tv', seasons: 10 },
    { title: 'The Godfather', year: 1972, genre: 'Crime', rating: 9.2, type: 'movie' },
    { title: 'The Dark Knight', year: 2008, genre: 'Action', rating: 9.0, type: 'movie' },
    { title: 'Pulp Fiction', year: 1994, genre: 'Crime', rating: 8.9, type: 'movie' },
    { title: 'Stranger Things', year: 2016, genre: 'Sci-Fi', rating: 8.7, type: 'tv', seasons: 4 },
    { title: 'Game of Thrones', year: 2011, genre: 'Fantasy', rating: 9.3, type: 'tv', seasons: 8 },
    { title: 'The Office', year: 2005, genre: 'Comedy', rating: 8.9, type: 'tv', seasons: 9 },
    { title: 'The Shawshank Redemption', year: 1994, genre: 'Drama', rating: 9.3, type: 'movie' },
    { title: 'The Big Bang Theory', year: 2007, genre: 'Comedy', rating: 8.1, type: 'tv', seasons: 12 }
];

// Class representing a movie
class Movie {
    #title;
    #year;
    #genre;
    #rating;
    #type;

    constructor(title, year, genre, rating, type) {
        this.#title = title;
        this.#year = year;
        this.#genre = genre;
        this.#rating = rating;
        this.#type = type;
    }

    get title() {
        return this.#title;
    }

    get year() {
        return this.#year;
    }

    get genre() {
        return this.#genre;
    }

    get rating() {
        return this.#rating;
    }

    get type() {
        return this.#type;
    }

    set title(value) {
        this.#title = value;
    }

    set year(value) {
        this.#year = value;
    }

    set genre(value) {
        this.#genre = value;
    }

    set rating(value) {
        this.#rating = value;
    }

    set type(value) {
        this.#type = value;
    }

    // Method to return a string representation of the movie
    toString() {
        return `${this.#title} è un film di genere ${this.#genre}. È stato rilasciato nel ${this.#year} ed ha un voto di ${this.#rating}.`;
    }
}

// Class representing a TV show, extending the Movie class
class Show extends Movie {
    #seasons;

    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type);
        this.#seasons = seasons;
    }

    get seasons() {
        return this.#seasons;
    }

    set seasons(value) {
        this.#seasons = value;
    }

    // Method to return a string representation of the TV show
    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.#seasons} stagioni. Ha un voto di ${this.rating}.`;
    }
}

// Class representing a cart
class Cart {

    constructor() {
        this.items = [];
        this.price = 3.99;
    }

    // Method to add movie in the cart
    addItem(movie) {
        this.items.push(movie);
        console.log(`${movie.title} è stato aggiunto nel carrello!`);
    }

    // Method to remove movie in the cart
    removeItem(movie) {
        const index = this.items.indexOf(movie);
        if (index > -1) {
            this.items.splice(index, 1);
            console.log(`${movie.title} è stato rimosso dal carrello!`);
        }
    }

    // Method to get total price of the cart
    getTotalPrice() {
        return this.items.length * this.price;
    }

    // Method to return cart items name
    toString() {
        return this.items.map(item => item.title);
    }

}



// Create instances of Movie or Show based on the type property
const mediaInstances = mediaArray.map(media => {
    if (media.type === 'movie') {
        return new Movie(media.title, media.year, media.genre, media.rating, media.type);
    } else if (media.type === 'tv') {
        return new Show(media.title, media.year, media.genre, media.rating, media.type, media.seasons);
    }
});

// Log the string representation of each media instance
mediaInstances.forEach(mediaInstance => {
    console.log(mediaInstance.toString());
});

// Function to calculate the average rating for movies of a specific genre
function averageRatingByGenre(mediaList, genre) {
    const filteredMedia = mediaList.filter(media => media.genre === genre && media.type === 'movie'); // Filter movies by genre
    const totalRating = filteredMedia.reduce((sum, media) => sum + media.rating, 0); // Sum the ratings of the filtered movies
    return filteredMedia.length ? (totalRating / filteredMedia.length) : 0; // Calculate the average rating
}

// Calculate the average rating for Sci-Fi movies
const sciFiRating = averageRatingByGenre(mediaInstances, 'Sci-Fi');
console.log(`Media dei voti per i film di genere Sci-Fi: ${sciFiRating}`);

// Function to get all unique genres from the movie list
function getAllGenres(mediaList) {
    const genres = new Set(mediaList.filter(media => media.type === 'movie').map(media => media.genre)); // Filter movies and extract unique genres
    return Array.from(genres); // Convert the Set to an Array
}

// Get all unique genres for movies
const genres = getAllGenres(mediaInstances);
console.log('Sono disponibili film con i seguenti generi:', genres);

// Function to filter movies by genre and return their string representations
function filterByGenre(mediaList, genre) {
    const filteredMovie = mediaList.filter(media => media.genre === genre && media.type === 'movie').map(media => media.title); // Filter movies by genre and map to string representations
    return filteredMovie; // Return the array of string representations
}

// Get and log the list of Sci-Fi movies
const filterMovie = filterByGenre(mediaInstances, 'Sci-Fi');
console.log(`Ecco una lista dei film con il genere Sci-Fi: ${filterMovie}`);

// Create instances of Cart
const cart = new Cart();

cart.addItem(mediaInstances[0]); // Adding Inception
cart.addItem(mediaInstances[2]); // Adding The Matrix

console.log('Carrello:', cart.toString());
console.log('Prezzo totale del carrello:', cart.getTotalPrice());

cart.removeItem(mediaInstances[2]); // Removing The Matrix

console.log('Carrello:', cart.toString());
