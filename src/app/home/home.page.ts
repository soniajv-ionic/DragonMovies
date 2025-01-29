import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItemOptions,
  IonItem,
  IonItemOption,
  IonList,
  IonInput,
  IonButton,
  IonLabel,
  IonItemSliding,
  IonProgressBar,
} from '@ionic/angular/standalone';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true, // Falta esta línea para que el componente sea standalone
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // imports: [
  //   IonToolbar,
  //   IonTitle,
  //   IonContent,
  //   IonItemOptions,
  //   IonItem,
  //   IonItemOption,
  //   IonList,
  //   IonInput,
  //   IonButton,
  //   IonLabel,
  //   IonItemSliding,
  //   IonProgressBar,
  //   FormsModule,
  //   CommonModule,
  // ],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, IonicModule],
})
export class HomePage {
  public movieTitle: string = '';
  public loading: boolean = false;

  // Constructor Injection
  constructor(public movieService: MoviesService, private router: Router) {}

  public search(): void {
    this.loading = true;
    this.movieService.getMovie(this.movieTitle).subscribe((data) => {
      this.loading = false;
      if (data.Response === 'False') {
        console.error('Dato no encontrado');
      } else {
        this.movieService.addMovie(data);
      }
    });
  }

  public save(title: string): void {
    console.log(`Saving... ${title}`);
    this.router.navigate([`details/${title}`]);
  }
}
