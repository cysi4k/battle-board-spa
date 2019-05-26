import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Router} from "@angular/router";
import {Tournament} from "../create-tournament/tournament.model";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  tournaments: Tournament[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getTournaments().then(querySnapshot => {
      querySnapshot.forEach(doc => {this.tournaments.push(doc.data() as Tournament); });
    });
    this.sortTournamentsByPoints();
  }


  openDetails(tournamentId) {
    this.router.navigate(['/tournament-details'] , { queryParams: { tournamentId: tournamentId} });
  }

  sortTournamentsByPoints() {
    this.tournaments.sort((a, b) => ( this.returnPointsNumber( a.teams ) > this.returnPointsNumber(b.teams) ? 1 : -1));
  }

  returnPointsNumber(teams): number {
    let points = 0;
    teams.forEach(team => points += team.points);
    return points;
  }

}
