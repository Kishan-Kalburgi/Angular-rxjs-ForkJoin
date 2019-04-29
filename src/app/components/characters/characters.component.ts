import { CharacterModel } from './../../models/character.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FilmsModel } from 'src/app/models/films.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: CharacterModel[] = [
    {
      name: 'Luke Skywalker',
      url: 'https://swapi.co/api/people/1/'
    },
    {
      name: 'Darth Vader',
      url: 'https://swapi.co/api/people/4/'
    },
    {
      name: 'Obi-wan Kenobi',
      url: 'https://swapi.co/api/people/unknown/'
    },
    {
      name: 'R2-D2',
      url: 'https://swapi.co/api/people/3/'
    }
  ];

  public films = [];
  public errorFlag = false;
  tempFilm = [];
  urlArray = [];

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
  }

  onSelected(url) {
    // this.url = url;
    this.fetchUrl(url);
  }

  fetchUrl(url) {
    this.films = [];
    this.tempFilm = [];
    this.service.getUrls(url)
      .subscribe(
        res => {
          this.errorFlag = false;
          this.urlArray = res['films'];
          this.urlArray.forEach(ele => {
            this.fetchFilms(ele);
          });
          this.films = this.tempFilm;
        },
        err => {
          this.errorFlag = true;
          console.log(err);
        }
      );
  }

  fetchFilms(url) {
    this.service.getFilms(url)
      .subscribe(
        res => {
          this.errorFlag = false;
          this.tempFilm.push(res);
        },
        err => {
          this.errorFlag = true;
          console.log(err);
        }
      );
  }

}
