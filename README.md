# Node ES6 Movies Exercise

## Esercizio

Definire un array di oggetti; ogni oggetto rappresenta un film o serie tv, che è caratterizzato da: 
- `title`
- `year`
- `genre`
- `rating`
- `type` (movie o tv)
- `seasons` (solo per serie tv)

## Classi

### Classe `Movie`
Contiene le informazioni sopra indicate:
- `title`
- `year`
- `genre`
- `rating`
- `type`

### Classe `TvSerie`
Estende la classe `Movie` e aggiunge la proprietà `seasons`.

### Metodo `toString()`
Entrambe le classi devono avere un metodo `toString()` che ritorna una stringa con i dati del film. Ad esempio:
- Per un film: `Jaws è un film di genere Drama. È stato rilasciato nel 1975 ed ha un voto di 8.`
- Per una serie tv: `Breaking Bad è una serie tv di genere Drama. La prima stagione è stata rilasciata nel 2008 ed in totale sono state prodotte 5 stagioni. Ha un voto di 9.5.`

## Funzioni

1. **Creazione istanze**: Utilizzare `.map()` per creare un nuovo array dove per ogni elemento dell'array originale viene creata un'istanza della classe `Movie` o `TvSerie` in base al tipo (`type`) e salvata nel nuovo array.

2. **Media dei voti**: Creare una funzione che restituisce la media dei voti di tutti i film per un determinato genere. La funzione deve prevedere un argomento per la lista dei film ed uno per il genere.

3. **Lista dei generi**: Creare una funzione che restituisce la lista di tutti i generi dei film, senza che questi si ripetano.

4. **Filtrare per genere**: Creare una funzione che filtra i film in base ad un genere passato come argomento e ritorna un array con il risultato della funzione `toString()` di ogni film.

## Esecuzione

Eseguire tutto il codice da terminale tramite NodeJs e stampare nel terminale il risultato delle varie funzioni.

## Bonus

1. Rendere le proprietà delle classi private e creare dei setter e dei getter per potervi accedere.
2. Creare una classe `Cart` dove poter salvare i film che si intende noleggiare. Tramite delle funzioni, poter aggiungere o togliere dei film dal carrello. Creare poi una funzione che stampi il costo totale dei film da noleggiare, dove per ogni film occorre specificare un prezzo fisso di 3.99.

Buon lavoro!