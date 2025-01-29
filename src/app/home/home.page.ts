import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItemOptions, IonItem, } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  public title: string = '';
  public loading: boolean = false;
  constructor( public dataService: MoviesService, private router: Router) { }

  public search(): void {
    this.loading = true;

  }
}
