import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../choose-game/game.model';
import { DataService } from '../../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {
  newTournament: FormGroup;
  submitted = false;
  gameId: number;
  // wybrana gra jest pod indexem 0
  games: Game[];
  constructor(private activeRouter: ActivatedRoute, private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.newTournament = this.formBuilder.group({
       firstName: ['', Validators.required]
      });
      this.activeRouter.queryParams.subscribe(params => {
      this.gameId = params["gameId"];
      });
      return this.dataService.getGame(this.gameId).subscribe(data => this.games = data);
  }

  // convenience getter for easy access to form fields
  get f() { return this.newTournament.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newTournament.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.newTournament.value));
  }
}
