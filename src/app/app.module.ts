import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
