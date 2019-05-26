import { Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';
import {Tournament} from '../create-tournament/tournament.model';

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
  }

  print() {
    this.tournaments = this.bubbleSort(this.tournaments);
  }

  openDetails(tournamentId) {
    this.router.navigate(['/tournament-details'] , { queryParams: { tournamentId: tournamentId, yourTournaments: false} });
  }

  returnPointsNumber(teams): number {
    let points = 0;
    teams.forEach(team => points += team.points);
    return points;
  }

  bubbleSort(myTable) {
    let change;
    let temp: Tournament[];
    do {
      change = false;
      for(let i = 0; i < myTable.length - 1; i++) {
        if (this.returnPointsNumber(myTable[i + 1].teams ) > this.returnPointsNumber(myTable[i].teams )) {
          console.log(myTable);
          temp = myTable[i];
          myTable[i] = myTable[i + 1];
          myTable[i + 1] = temp;
          change = true;
        }
      }
    } while (change);
    return myTable;
  }

}
