import {Component, Input } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';

@Component({
    selector: 'movies-list',
    templateUrl: 'movies-list.component.html',
    styleUrls: [
        'movies-list.component.css'
    ]
})
export class MoviesListComponent {
    @Input() moviesList: MovieModel[];
}