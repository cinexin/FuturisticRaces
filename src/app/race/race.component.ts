import { Component, OnInit, Input } from '@angular/core';
import {RacesComponent} from '../races/races.component';

/* The "Input" Module will make this available for being passed to other Components */
@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  @Input() race;

  constructor(private racesComponent: RacesComponent) {

  }

  ngOnInit() {
  }

  castDate(date) {
    return new Date(date);
  }

  enterRace() {
    this.racesComponent.enterRace(this.race);
  }

  cancelRace() {
    this.racesComponent.cancelRace(this.race);
  }


}
