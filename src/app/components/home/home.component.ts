import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../auth.service';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';
import {Game} from '../choose-game/game.model';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
news: object[];
games: Game[];
constructor(private dataService: DataService, private router: Router, public authService: AuthService ) {
  }

  ngOnInit() {
    this.dataService.getNews().subscribe(data => this.news = data);
    this.dataService.getHotestGames().subscribe(data => this.games = data);
  }

  goToGame(gameId) {
    this.router.navigate(['/create-tournament'] , { queryParams: { gameId: gameId} });
  }
}
