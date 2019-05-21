import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Games} from './games.model';
import {Config} from 'protractor';
import {Game} from "./game.model";

@Component({
  selector: 'app-choose-game',
  templateUrl: './choose-game.component.html',
  styleUrls: ['./choose-game.component.scss']
})
export class ChooseGameComponent implements OnInit {
  games: Game[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getGames().subscribe(data => this.games = data);
  }

}
