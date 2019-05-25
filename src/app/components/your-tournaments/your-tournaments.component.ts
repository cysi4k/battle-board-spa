import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-your-tournaments',
  templateUrl: './your-tournaments.component.html',
  styleUrls: ['./your-tournaments.component.scss']
})
export class YourTournamentsComponent implements OnInit {
  // prepare var for all tournaments
  tournaments: any;
  // prepare var for user tournaments
  userTournaments: any;
  userId: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // fill tournaments array with data from database
    // static example
    this.tournaments = [
      { name: "Tournament 1", gameName: "Game 1", numberOfRounds: 2, userId: "00uDGCSZnlfSVR0dpMaayEQkDbs1" }, // zaneta
      { name: "Tournament 2", gameName: "Game 2", numberOfRounds: 6, userId: "XEWrCpJ6PVOE2g5jTnrHUhQVPdm2" }, // marta
      { name: "Tournament 3", gameName: "Game 3", numberOfRounds: 3, userId: "00uDGCSZnlfSVR0dpMaayEQkDbs1" }, // zaneta
      { name: "Tournament 4", gameName: "Game 4", numberOfRounds: 1, userId: "XEWrCpJ6PVOE2g5jTnrHUhQVPdm2" }, // marta
    ];

    // get current userId from storage 
    this.userId = JSON.parse(localStorage.getItem('user')).uid;

    this.getUserTournaments();
  }

  // function to filter tournaments -- get tournaments for specific user 
  // (filtered by userId in tournament collection)
  // fill userTounaments with result 
  getUserTournaments() {
    this.userTournaments = this.tournaments.filter(
      tournament => tournament.userId === this.userId);
  }
}
