// Array of objects representing movies and TV shows
const mediaArray = [
    { title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 8.8, type: 'movie' },
    { title: 'Breaking Bad', year: 2008, genre: 'Drama', rating: 9.5, type: 'tv', seasons: 5 },
    { title: 'The Matrix', year: 1999, genre: 'Sci-Fi', rating: 8.7, type: 'movie' },
    { title: 'Friends', year: 1994, genre: 'Comedy', rating: 8.9, type: 'tv', seasons: 10 }
];

// Class representing a movie
class Movie {
    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    // Method to return a string representation of the movie
    toString() {
        return `${this.title} è un film di genere ${this.genre}. È stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`;
    }
}

// Class representing a TV show, extending the Movie class
class Show extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type); // Call the parent class constructor
        this.seasons = seasons; // Add a new property specific to TV shows
    }

    // Method to return a string representation of the TV show
    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}.`;
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
console.log('Generi disponibili:', genres);

// Function to filter movies by genre and return their string representations
function filterByGenre(mediaList, genre) {
    const filteredMovie = mediaList.filter(media => media.genre === genre && media.type === 'movie').map(media => media.toString()); // Filter movies by genre and map to string representations
    return filteredMovie; // Return the array of string representations
}

// Get and log the list of Sci-Fi movies
const filterMovie = filterByGenre(mediaInstances, 'Sci-Fi');
console.log(`Ecco una lista dei film con il genere selezionato: ${filterMovie}`);
