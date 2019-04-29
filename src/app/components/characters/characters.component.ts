import { CharacterModel } from './../../models/character.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { forkJoin } from 'rxjs';

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
  urlArray = [];

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
  }

  onSelected(url) {
    this.fetchUrl(url);
  }

  fetchUrl(url) {
    this.films = [];
    this.service.getUrls(url)
      .subscribe(
        res => {
          this.errorFlag = false;
          this.urlArray = res['films'];
          forkJoin(this.urlArray.map(ele => this.service.getFilms(ele))).subscribe(results => {
            this.films = results;
          });
        },
        err => {
          this.errorFlag = true;
          console.log(err);
        }
      );
  }
}
