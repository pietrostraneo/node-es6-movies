// Define an array of media objects
const mediaArray = [
    { title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 8.8, type: 'ovie' },
    { title: 'Breaking Bad', year: 2008, genre: 'Drama', rating: 9.5, type: 'tv', seasons: 5 },
    { title: 'The Matrix', year: 1999, genre: 'Sci-Fi', rating: 8.7, type: 'ovie' },
    { title: 'Friends', year: 1994, genre: 'Comedy', rating: 8.9, type: 'tv', seasons: 10 }
];

// Define a class for Movie objects
class Movie {
    // Constructor for Movie objects
    constructor(title, year, genre, rating, type) {
        // Initialize properties of the Movie object
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    // Method to convert the Movie object to a string
    toString() {
        // Return a string representation of the Movie object
        return `${this.title} è un film di genere ${this.genre}. È stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`;
    }
}

// Define a class for Show objects that extends the Movie class
class Show extends Movie {
    // Constructor for Show objects
    constructor(title, year, genre, rating, type, seasons) {
        // Call the constructor of the parent class (Movie)
        super(title, year, genre, rating, type);
        // Initialize the seasons property of the Show object
        this.seasons = seasons;
    }

    // Method to convert the Show object to a string
    toString() {
        // Return a string representation of the Show object
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}.`;
    }
}

// Create an array of media instances
const mediaInstances = mediaArray.map(media => {
    // Create a new Movie or Show object based on the type of media
    if (media.type === 'ovie') {
        return new Movie(media.title, media.year, media.genre, media.rating, media.type);
    } else if (media.type === 'tv') {
        return new Show(media.title, media.year, media.genre, media.rating, media.type, media.seasons);
    }
});

// Log the string representation of each media instance
mediaInstances.forEach(mediaInstance => {
    console.log(mediaInstance.toString());
});

// Function to calculate the average rating of movies by genre
function averageRatingByGenre(mediaList, genre) {
    // Filter the media list to include only movies of the specified genre
    const filteredMedia = mediaList.filter(media => media.genre === genre && media.type === 'ovie');
    // Calculate the total rating of the filtered media
    const totalRating = filteredMedia.reduce((sum, media) => sum + media.rating, 0);
    // Return the average rating, or 0 if there are no movies of the specified genre
    return filteredMedia.length ? (totalRating / filteredMedia.length) : 0;
}

// Calculate the average rating of Sci-Fi movies
const sciFiRating = averageRatingByGenre(mediaInstances, 'Sci-Fi');
console.log(`Media dei voti per i film di genere Sci-Fi: ${sciFiRating}`);

// Function to get all unique genres from the media list
function getAllGenres(mediaList) {
    // Filter the media list to include only movies
    const genres = new Set(mediaList.filter(media => media.type === 'ovie').map(media => media.genre));
    // Return an array of unique genres
    return Array.from(genres);
}

// Get all unique genres from the media list
const genres = getAllGenres(mediaInstances);
console.log('Generi disponibili:', genres);

// Function to filter movies by genre
function filterByGenre(mediaList, genre) {
    // Filter the media list to include only movies of the specified genre
    const filteredMovie = mediaList.filter(media => media.genre === genre && media.type === 'ovie').map(media => media.toString());
    // Return an array of string representations of the filtered movies
    return filteredMovie;
}

// Filter Sci-Fi movies
const filterMovie = filterByGenre(mediaInstances, 'Sci-Fi');
console.log(`Ecco una lista dei film con il genere selezionato: ${filterMovie}`)