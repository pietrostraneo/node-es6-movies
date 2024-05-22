const mediaArray = [
    { title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 8.8, type: 'movie' },
    { title: 'Breaking Bad', year: 2008, genre: 'Drama', rating: 9.5, type: 'tv', seasons: 5 },
    { title: 'The Matrix', year: 1999, genre: 'Sci-Fi', rating: 8.7, type: 'movie' },
    { title: 'Friends', year: 1994, genre: 'Comedy', rating: 8.9, type: 'tv', seasons: 10 }
];

class Movie {
    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    toString() {
        return `${this.title} è un film di genere ${this.genre}. È stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`;
    }
}

class Show extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }

    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}.`;
    }
}

const mediaInstances = mediaArray.map(media => {
    if (media.type === 'movie') {
        return new Movie(media.title, media.year, media.genre, media.rating, media.type);
    } else if (media.type === 'tv') {
        return new Show(media.title, media.year, media.genre, media.rating, media.type, media.seasons);
    }
});

mediaInstances.forEach(mediaInstance => {
    console.log(mediaInstance.toString());
});

function averageRatingByGenre(mediaList, genre) {
    const filteredMedia = mediaList.filter(media => media.genre === genre && media.type === 'movie');
    const totalRating = filteredMedia.reduce((sum, media) => sum + media.rating, 0);
    return filteredMedia.length ? (totalRating / filteredMedia.length) : 0;
}

const sciFiRating = averageRatingByGenre(mediaInstances, 'Sci-Fi');
console.log(`Media dei voti per i film di genere Sci-Fi: ${sciFiRating}`);

function getAllGenres(mediaList) {
    const genres = new Set(mediaList.filter(media => media.type === 'movie').map(media => media.genre));
    return Array.from(genres);
}

const genres = getAllGenres(mediaInstances);
console.log('Generi disponibili:', genres);

function filterByGenre(mediaList, genre) {
    const filteredMovie = mediaList.filter(media => media.genre === genre && media.type === 'movie').map(media => media.toString());
    return filteredMovie;
}

const filterMovie = filterByGenre(mediaInstances, 'Sci-Fi');
console.log(`Ecco una lista dei film con il genere selezionato: ${filterMovie}`)