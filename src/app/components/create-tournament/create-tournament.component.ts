import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../choose-game/game.model';
import { DataService } from '../../data.service';
import { Tournament } from './tournament.model';
@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})

export class CreateTournamentComponent implements OnInit {
  tournament: Tournament;
  gameId: string;
  games: Game[];
  userNames = [];
  chosenPlayers = [];
  clicked: boolean = false;

  constructor(private activeRouter: ActivatedRoute,
              private dataService: DataService,
              private router: Router) {
    this.tournament = {
      name: '',
      teamSize: 0,
      playersNumber: 0,
      numberOfRounds: 0,
      userId: '',
      choosingTeamType: '',
      teams: [],
      gameId: '',
      gameName: '',
      assignedUsers: [],
      tournamentTime: 0
    };
  }

  ngOnInit() {
      this.activeRouter.queryParams.subscribe(params => {
        this.gameId = params["gameId"];
      });
      this.dataService.getGameById(this.gameId).subscribe(data => this.games = data);
      this.dataService.getUsers().then(querySnapshot => {
        querySnapshot.forEach(doc => { 
          if(doc.get("displayName") !== null) {
            this.userNames.push(doc.get("displayName"));
          } else {
            this.userNames.push(doc.get("email"));
          }
        });
      });
  }

  fillArrayWithNumbers(a, b): number[] {
    const tab: number[] = [];
    for (let i = 0 ; i < b + 1 - a ; i++) {
      tab[i] = a + i;
    }
    return tab;
  }

  choosePlayer(user: string) {
    if(!this.isPlayerChecked(user)) {
      this.addPlayer(user);
    } else {
      this.removePlayer(user);
    }
  }

  addPlayer(user: string) {
    if(this.chosenPlayers.length < this.games[0].max_players) {
      this.chosenPlayers.push(user);
      this.clicked = true;
    }
  }

  removePlayer(user: string) {
    this.chosenPlayers.splice(this.chosenPlayers.indexOf(user), 1);
  }

  isPlayerChecked(user: string): boolean {
    return this.chosenPlayers.includes(user)
  }

  onSubmit() {
    this.setGameIdToTournament();
    this.setGameNameToTournament();
    this.setUserIdToTournament();
    this.setChosenPlayers();
    this.dataService.setBasicTournamentData(this.tournament);
    this.router.navigate(['/tournament'] , { queryParams: { tournamentName: this.tournament.name} });
  }

  setChosenPlayers() {
    this.tournament.assignedUsers = this.chosenPlayers;
    this.tournament.playersNumber = this.chosenPlayers.length;
  }

  setTeamSize(event: any) {
    this.tournament.teamSize = event.target.value;
  }

  setNumberOfRounds(event: any) {
    this.tournament.numberOfRounds = event.target.value;
  }

  setGameNameToTournament() {
    this.tournament.gameName = this.games[0].name;
  }

  setGameIdToTournament() {
    this.tournament.gameId = this.gameId;
  }

  setUserIdToTournament() {
    this.tournament.userId = JSON.parse(localStorage.getItem('user')).uid;
  }
}
