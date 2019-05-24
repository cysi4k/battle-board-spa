import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Game } from '../choose-game/game.model';
import { DataService } from '../../data.service';
import {Tournament} from './tournament.model';


@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {
  tournament: Tournament;
  gameId: string;
  tournamentName: string = '';
  // wybrana gra jest pod indexem 0
  games: Game[];
  constructor(private activeRouter: ActivatedRoute, private dataService: DataService, private router: Router) {
   this.tournament = {
    name: '',
    teamSize: 0,
    playersNumber: 0,
    numberOfRounds: 0,
    userId: '',
    choosingTeamType: '',
    teams: [],
    gameId: '',
    assignedUsers: [],
    tournamentTime: 0
  };
  }

  ngOnInit() {
      this.activeRouter.queryParams.subscribe(params => {
      this.gameId = params["gameId"];
      });
      return this.dataService.getGame(this.gameId).subscribe(data => this.games = data);
  }

  onSubmit() {
    console.log();
    this.setGameIdToTournament();
    this.setUserIdToTournament();
    this.tournament.name = this.tournamentName;
    this.dataService.setBasicTournamentData(this.tournament);
    this.router.navigate(['/tournament'] , { queryParams: { tournamentName: this.tournament.name} });
  }

  fillArrayWithNumbers(a, b): number[] {
    const tab: number[] = [];
    for (let i = 0 ; i < b + 1 - a ; i++) {
      tab[i] = a + i;
    }
    return tab;
  }

  setPlayersNumber(event: any) {
    this.tournament.playersNumber = event.target.value;
  }

  setTeamsChoosing(event: any) {
    this.tournament.choosingTeamType = event.target.value;
  }

  setTeamSize(event: any) {
    this.tournament.teamSize = event.target.value;
  }

  setNumberOfRounds(event: any) {
    this.tournament.numberOfRounds = event.target.value;
  }

  setGameIdToTournament() {
    this.tournament.gameId = this.gameId;
  }

  setUserIdToTournament() {
    this.tournament.userId = JSON.parse(localStorage.getItem('user')).uid;
  }
}
