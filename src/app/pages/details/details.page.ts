import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/movie';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    // IonContent,
    // IonHeader,
    // IonTitle,
    // IonToolbar,
    CommonModule,
    FormsModule,
    IonicModule,
  ],
})
export class DetailsPage implements OnInit {
  title: string = '';
  movie: Movie | undefined;

  activateRoute = inject(ActivatedRoute);
  movieService = inject(MoviesService);

  constructor() {}

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.title = params['title'];
    });
    this.movie = this.movieService.movies.find(
      (movie) => movie.Title === this.title
    );
  }
}
