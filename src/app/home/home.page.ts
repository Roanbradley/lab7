// Import necessary modules and components from Angular and Ionic
import { Component, OnInit } from '@angular/core'; // Component and OnInit for component lifecycle management
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonTitle, IonToolbar, IonContent } from '@ionic/angular/standalone'; // Import Ionic components for UI
import { MovieService } from '../services/movie.service'; // Import the MovieService for making API calls to fetch movie data
import { CommonModule } from '@angular/common'; // Import CommonModule for common Angular directives like *ngFor

@Component({
  selector: 'app-home', // Selector for this component in the HTML
  templateUrl: 'home.page.html', // Path to the HTML template for the component
  styleUrls: ['home.page.scss'], // Path to the styles for the component
  imports: [
    // Import all necessary Ionic and Angular modules and components for the template to work
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
    CommonModule, IonHeader, IonTitle, IonToolbar, IonContent
  ],
})
export class HomePage implements OnInit {
  
  // Declare an array to store the movie data
  myMovies: any[] = [];

  // Constructor to inject the MovieService (ms) into the component
  constructor(private ms: MovieService) {}

  // ngOnInit lifecycle hook that gets called once the component is initialized
  ngOnInit(): void {
    // Call the getMovieData method from the MovieService to get the movie data
    this.ms.getMovieData().subscribe(
      (data) => {
        // Assign the movie data's 'Search' property to 'myMovies' once the data is received
        this.myMovies = data.Search;
      }
    );
  }
}
