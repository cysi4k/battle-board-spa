import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {Tournament} from '../create-tournament/tournament.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-your-tournaments',
  templateUrl: './your-tournaments.component.html',
  styleUrls: ['./your-tournaments.component.scss']
})
export class YourTournamentsComponent implements OnInit {
  // prepare var for all tournaments
  tournaments: Tournament[] = [];
  userId: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
     this.dataService.getTournamentsForUser().then(querySnapshot => {
     querySnapshot.forEach(doc => {this.tournaments.push(doc.data() as Tournament); });
    });
    // get current userId from storage
    this.userId = JSON.parse(localStorage.getItem('user')).uid;
  }

  openDetails(tournamentId) {
    this.router.navigate(['/tournament-details'] , { queryParams: { tournamentId: tournamentId,  yourTournaments: true} });
  }
}
