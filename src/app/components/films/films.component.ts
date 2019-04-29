import { Component, OnInit, Input } from '@angular/core';

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
