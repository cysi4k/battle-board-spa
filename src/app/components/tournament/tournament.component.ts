import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';
import { Tournament } from '../create-tournament/tournament.model';
import { Team } from './Team.model';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  tournament: Tournament;
  actualRound = 1;
  tournamentName: string;
  teamsNumber: number;
  isLastRound: boolean = false;
  ready: boolean = false;
  interval: any;
  team: Team[];
  points = [];

  constructor(private activeRouter: ActivatedRoute, private dataService: DataService, private router: Router) {
    this.tournament = {
      name: '',
      teamSize: 0,
      playersNumber: 0,
      numberOfRounds: 0,
      userId: '',
      choosingTeamType: '',
      gameId: '',
      gameName: '',
      assignedUsers: [],
      teams: [],
      tournamentTime: 0
    };
  }

  ngOnInit() {
    this.activeRouter.queryParams.subscribe(params => {
      this.tournamentName = params['tournamentName'];
    });
    this.dataService.getBasicTournamentData(this.tournamentName).then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.tournament = doc.data() as Tournament;
        this.teamsNumber = this.tournament.teams.length; 
        if (this.actualRound === parseInt(this.tournament.numberOfRounds.toString())) {
          this.isLastRound = true;
        }
        this.ready = true;
      });
    });
    this.startTimer();
  }

  // buttons methods
  endRound() {
    this.setPoints();
    this.actualRound++;
    if (this.actualRound === parseInt(this.tournament.numberOfRounds.toString())) {
      this.isLastRound = true;
    }
  }

  endTournament() {
    this.setPoints();
    this.dataService.setTournament(this.tournament);
    this.router.navigate(['/your-tournaments']);
  }

  setPoints() {
    for (let i = 0; i < this.tournament.teams.length ; i++) {
      if (typeof this.tournament.teams[i].points === 'undefined' || this.tournament.teams[i].points === null) {
        this.tournament.teams[i].points = 0;
      }
      this.tournament.teams[i].points += parseInt(this.points[i]);
      this.points[i] = 0;
    }
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
