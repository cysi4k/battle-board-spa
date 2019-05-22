import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../../data.service';
import {Game} from './game.model';

@Component({
  selector: 'app-choose-game',
  templateUrl: './choose-game.component.html',
  styleUrls: ['./choose-game.component.scss']
})
export class ChooseGameComponent implements OnInit {
  games: Game[];
  page = 1;
  pageSize = 10;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    return this.dataService.getGames().subscribe(data => this.games = data);
  }

  createTournament(gameId) {
    console.log(gameId);
    this.router.navigate(['/create-tournament'] , { queryParams: { gameId: gameId} });

  }

}
