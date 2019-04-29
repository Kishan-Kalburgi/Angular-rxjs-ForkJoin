import { FilmsModel } from './../../models/films.model';
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {


  @Input() public films;
  @Input() public errorFlag;

  constructor() { }

  ngOnInit() {

  }
}
