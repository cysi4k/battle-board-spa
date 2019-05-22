import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Game} from './components/choose-game/game.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://www.boardgameatlas.com/api/';
  search = 'search?';
  token = 'client_id=19MjTO641U';
  data: any;
  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
     return this.http.get<Game[]>(this.apiUrl + this.search + this.token).pipe(map(res => res['games']));
  }

  getGame(id): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl + this.search + 'ids=' + id + '&' + this.token).pipe(map(res => res['games']));
  }
}
