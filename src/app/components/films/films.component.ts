import { FilmsModel } from './../../models/films.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: FilmsModel[];

  constructor(private service: DataService) { }

  ngOnInit() {
  }

  fetchFilms(url) {
    this.service.getFilms(url)
      .subscribe(
        res => {
          this.films = res['data'];
          console.log(this.films);
        },
        err => {
          console.log(err);
        }
      );
  }
}
