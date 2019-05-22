import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Game} from '../choose-game/game.model';
@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {
  gameId: number;
  game: Game;
  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit() {
      this.activeRouter.queryParams.subscribe(params => {
      this.gameId = params["gameId"];
      });
  }

  getGameInformation() {


  }

}
