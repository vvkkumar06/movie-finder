import { Component, Injectable } from '@angular/core';
import { MovieModel } from './models/movie.model';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _movieList: MovieModel[];
  private _searchString: string;
    constructor(private _movieService: MovieService){}
  
    private getMovieList(searchString: string): void {
      this._movieService.getMoviesData(searchString)
        .subscribe(response => {
          this._movieList = response.Search;
        });
    }

    private onSearch(){
      this.getMovieList(this._searchString);
    }
}
