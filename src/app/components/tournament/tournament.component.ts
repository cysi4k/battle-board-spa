import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../data.service';
import {Tournament} from '../create-tournament/tournament.model';
import {Team} from './Team.model';


@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit , AfterViewInit {
  tournament: Tournament;
  actualRound = 1;
  tournamentName: string;
  teamsNumber = 0;
  isLastRound: boolean;
  interval;
  team: Team[];

  constructor(private activeRouter: ActivatedRoute, private dataService: DataService, private router: Router) {
    this.tournament = {
      name: '',
      teamSize: 0,
      playersNumber: 0,
      numberOfRounds: 0,
      userId: '',
      choosingTeamType: '',
      gameId: '',
      assignedUsers: [],
      teams: [],
      tournamentTime: 0
  };

    if (this.actualRound === parseInt(this.tournament.numberOfRounds.toString())) {
      this.isLastRound = true;
    } else {
      this.isLastRound = false;
    }
  }

  ngOnInit() {
    this.activeRouter.queryParams.subscribe(params => {
      this.tournamentName = params['tournamentName'];
    });
    this.dataService.getBasicTournamentData(this.tournamentName).then(querySnapshot => {
      querySnapshot.forEach(doc => {this.tournament = doc.data() as Tournament; });
    });
  }
  ngAfterViewInit() {
    setTimeout( () => {
        this.randomizeTeams();
        this.startTimer();
      }, 1000);
  }

  // logic for randomizing methods
  randomizeTeams() {
    this.tournament.assignedUsers = this.shuffleUsersArray(this.tournament.assignedUsers);

    if (this.tournament.playersNumber % this.tournament.teamSize === 0) {
      this.teamsNumber = this.tournament.playersNumber / this.tournament.teamSize;
    } else {
      this.teamsNumber = Math.floor(1 + (this.tournament.playersNumber / this.tournament.teamSize));
    }
    this.tournament.teams = [];

    let n = 0;
    this.team = [];
    for (let i = 0; i < this.teamsNumber ; i++) {
      this.team[i] = new Team();
      this.team[i].people = [];
      for (let j = 0; j < this.tournament.teamSize ; j++) {
        if (j < this.tournament.assignedUsers.length) {
          this.team[i].people[j] = this.tournament.assignedUsers[n];
          n++;
        }
        }
      const teams = this.team.map((obj) => { return Object.assign({}, obj); } );

      this.tournament.teams = teams;
    }
  }
  shuffleUsersArray(array): string[]{
    array.sort(() => Math.random() - 0.5);
    return array;
  }

  // buttons methods
  endRound() {
    this.actualRound++;
    if (this.actualRound === parseInt(this.tournament.numberOfRounds.toString())) {
      this.isLastRound = true;
    } else {
      this.isLastRound = false;
    }
  }

  endTournament() {
    this.dataService.setTournament(this.tournament);
    // this.router.navigate(['/tournament'] , { queryParams: { tournamentName: this.tournament.name} });
    // TODO:  go to summary
    alert("Toournament Finished!");
  }

  // timer methods
  startTimer() {
    this.interval = setInterval(() => {
      if (this.tournament.tournamentTime > -1) {
        this.tournament.tournamentTime++;
      }
    }, 60000);
  }
}
