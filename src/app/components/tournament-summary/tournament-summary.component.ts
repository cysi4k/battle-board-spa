import {Component, OnInit} from '@angular/core';
import {Tournament} from "../create-tournament/tournament.model";
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tournament-summary',
  templateUrl: './tournament-summary.component.html',
  styleUrls: ['./tournament-summary.component.scss']
})
export class TournamentSummaryComponent implements OnInit {
  tournament: Tournament[] = [];
  tournamentId: '';
  backToTournaments: boolean;
  ready: boolean = false;

  constructor(private activeRouter: ActivatedRoute, private dataService: DataService, private router: Router) {
    this.activeRouter.queryParams.subscribe(params => {
      this.tournamentId = params["tournamentId"];
      this.backToTournaments = params["yourTournaments"];
    });
    this.dataService.getTournament(this.tournamentId).then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.tournament.push(doc.data() as Tournament);
        this.ready = true;
      });
    });
  }


  ngOnInit() {
  }

  teamThatWon(teamIndex) {
    console.log(teamIndex + " = " + this.getIndexOfLargest(this.tournament[0].teams));
    if (teamIndex === this.getIndexOfLargest(this.tournament[0].teams)) {
      return true;
    }
    return false;
  }

  getIndexOfLargest(array): number {
    if (array == null || array.length === 0) {
      return -1;
    }// null or empty

    let largest = 0;
    for (let i = 1; i < array.length; i++) {
      if (array[i] > array[largest]) {
        largest = i;
      }
    }
    return largest; // position of the first largest found
  }

  backToSite() {
    if (this.backToTournaments.toString() === 'true' || this.backToTournaments === true) {
      this.router.navigate(['/your-tournaments']);
    } else {
      this.router.navigate(['/ranking'] );
    }

  }
}
