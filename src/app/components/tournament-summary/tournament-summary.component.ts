import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-summary',
  templateUrl: './tournament-summary.component.html',
  styleUrls: ['./tournament-summary.component.scss']
})
export class TournamentSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeTournament() {
    // strzał z turniejem do backendu
  }
}
