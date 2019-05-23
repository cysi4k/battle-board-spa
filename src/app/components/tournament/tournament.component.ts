import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  tournament = {
    name: "Turniej Monopoly!",
    players: 4,
    teams: [ ["cysi4k"], ["zanekkk"], ["ppadamczyk"], ["jduda"]],
    numberOfRounds: 4,
    activeRound: 1,
    roundDuration: 30 // czas rundy czy całej gry?
  }

  constructor() { }

  ngOnInit() { }

  endRound() {
    this.tournament.activeRound++;
  }

  endTournament() {
    // TODO:  go to summary

    alert("Toournament Finished!");
  }

  get isFinalRound(): boolean {
    return this.tournament.activeRound === this.tournament.numberOfRounds;
  }
}
