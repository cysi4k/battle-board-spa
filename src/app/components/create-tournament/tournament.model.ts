import {Team} from '../tournament/Team.model';

export class Tournament {
  name: string;
  teamSize: number;
  playersNumber: number;
  numberOfRounds: number;
  userId: string;
  choosingTeamType: string;
  gameId: string;
  gameName: string;
  teams: Team[];
  assignedUsers: string[];
  tournamentTime: number;
}
