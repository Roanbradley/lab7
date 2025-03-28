// Importing necessary Angular modules
import { Injectable } from '@angular/core'; // Injectable decorator to make this service available for dependency injection
import { HttpClient } from '@angular/common/http'; // HttpClient module to make HTTP requests
import { Observable } from 'rxjs'; // Observable class to handle asynchronous operations

// The Injectable decorator is used to mark the service as available to be injected into other components or services
@Injectable({
  providedIn: 'root' // This makes the service available throughout the application
})
export class MovieService {

  // Constructor that injects HttpClient to make HTTP requests
  constructor(private http: HttpClient) { }

  // Method to fetch movie data from the OMDB API
  getMovieData(): Observable<any> {
    // Makes a GET request to the OMDB API and returns the result as an Observable
    return this.http.get('https://www.omdbapi.com/?apikey=2ee2ed84&s=%27thank%27');
  }
}

