import { CharacterModel } from './../../models/character.model';
import { Component, OnInit } from '@angular/core';

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

  public url: string;

  constructor() { }

  ngOnInit() {
  }

  onSelected(character) {
    console.log(character);
  }

}
