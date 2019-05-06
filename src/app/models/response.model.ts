import { MovieModel } from './movie.model';

export class ResponseModel {
    Search: MovieModel[];
    totalResults: string;
    Response: string;
}