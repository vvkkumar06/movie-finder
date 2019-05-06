import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';

@Injectable()
export class MovieService{
    private _baseUrl: string = 'http://www.omdbapi.com/';
    private _apiKey: string = '9f6d2e5d';

    constructor(private _httpClient: HttpClient){}

    public getMoviesData(searchString): Observable<ResponseModel>{
        return this._httpClient.get<ResponseModel>(
            `${this._baseUrl}/?s=${searchString}&apiKey=${this._apiKey}`
            );
    }
}