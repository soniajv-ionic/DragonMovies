// ----- Database -----
import { inject, Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

const NODE_ROOT = 'movies';

@Injectable({
  providedIn: 'root',
})
export class LocaldatabaseService {
  private storage = inject(Storage);

  constructor() {
    this.init();
  }

  async init() {
    this.storage = await this.storage.create();
  }

  saveMovie(movie: Movie) {
    this.storage
      .get(NODE_ROOT)
      .then((data) => {
        if (data == null) {
          let movies = new Array();
          movies.push(movie);
          this.storage.set(NODE_ROOT, movies);
        } else {
          let movies = data;
          movies.push(movie);
          this.storage.set(NODE_ROOT, movies);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      })
      .finally(() => {
        console.log(`Storage process finished`);
      });
  }

  getMovie(title: string): Observable<Movie> {
    return new Observable<Movie>((subscriber) => {
      this.storage.get(NODE_ROOT).then((movies) => {
        let movie = movies.find((p: Movie) => p.Title == title);
        subscriber.next(movie);
        subscriber.complete();
      });
    });
  }

  getAllMovies() {
    return this.storage.get(NODE_ROOT);
  }
}
