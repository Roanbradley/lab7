import { Component, OnInit} from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonHeader, IonTitle, IonToolbar, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, CommonModule,IonHeader, IonTitle, IonToolbar,IonContent],
})


export class HomePage implements OnInit {

  myMovies:any[] = [];
  constructor(private ms:MovieService) {}

  ngOnInit(): void {
    this.ms.getMovieData().subscribe(
      (data)=>{
        this.myMovies = data.Search;


      }
    );
    
    


  }

}
