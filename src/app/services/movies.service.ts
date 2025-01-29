import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Movie } from '../interfaces/movie';
import { delay, Observable } from 'rxjs';

const BASE_URL = 'https//www.omdbapi.com';
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private http = inject(HttpClient);
  movies: Movie[] = [];

  constructor() {}

  getMovie(title: string): Observable<Movie> {
    return this.http
      .get<Movie>(`${BASE_URL})?apiKey=${API_KEY}&=${title}`)
      .pipe(delay(1000));
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }
}
