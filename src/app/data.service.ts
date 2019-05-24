import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Game } from './components/choose-game/game.model';
import { Observable } from 'rxjs';
import { Tournament } from './components/create-tournament/tournament.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tournaments: Tournament[];
  firebase = 'https://firestore.googleapis.com/v1beta1/projects/battleboard-1cfb2/databases/(default)/documents/';
  // pomiedzy tymi dwoma trzeba dodac wybrany dokument
  putDocument = ':importDocuments'
  apiUrl = 'https://www.boardgameatlas.com/api/';
  search = 'search?';
  token = 'client_id=19MjTO641U';
  public headers: HttpHeaders;

  data: any;
  constructor(private http: HttpClient, private firestore: AngularFirestore) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  getGames(): Observable<Game[]> {
     return this.http.get<Game[]>(this.apiUrl + this.search + this.token).pipe(map(res => res['games']));
  }

  getGame(id): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl + this.search + 'ids=' + id + '&' + this.token).pipe(map(res => res['games']));
  }
  setTournaments(tournament) {
    this.data = '{"fields": {"choosingTeamType": \"Random\","userId": \"00uDGCSZnlfSVR0dpMaayEQkDbs1\","gameId": \"kPDxpJZ8PD\","name": \"Przykładowy turniej numer 11\","teamSize": 2,"numberOfRounds": 5,"playersNumber": 4}}';
    return new Promise<any>((resolve, reject) => {this.firestore.collection('tournaments').add(tournament).then(res => {}, err => reject(err)); });
  }
}
// console.log('bleee')
// this.http.post('https://firestore.googleapis.com/v1beta1/projects/battleboard-1cfb2/databases/(default)/documents/tournaments/commit',
//   '{"fields": {"choosingTeamType": \"Random\","userId": \"00uDGCSZnlfSVR0dpMaayEQkDbs1\","gameId": \"kPDxpJZ8PD\","name": \"Przykładowy turniej numer 11\","teamSize": 2,"numberOfRounds": 5,"playersNumber": 4}}').subscribe(response => {});
