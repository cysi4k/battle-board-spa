import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated
import { SignInComponent } from '../../app/components/sign-in/sign-in.component';
import { SignUpComponent } from '../../app/components/sign-up/sign-up.component';
import { HomeComponent } from '../../app/components/home/home.component';
import { ForgotPasswordComponent } from '../../app/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../app/components/verify-email/verify-email.component';
import { ChooseGameComponent } from '../../app/components/choose-game/choose-game.component';
import { CreateTournamentComponent} from '../../app/components/create-tournament/create-tournament.component';
import { RankingComponent} from '../../app/components/ranking/ranking.component';
import { YourTournamentsComponent } from '../../app/components/your-tournaments/your-tournaments.component';
import { UserProfileComponent } from 'src/app/components/user-profile/user-profile.component';
import { TournamentComponent } from 'src/app/components/tournament/tournament.component';
import { TournamentSummaryComponent } from 'src/app/components/tournament-summary/tournament-summary.component';
// Import canActivate guard services
import { AuthGuard } from '../../app/auth.guard';
import { SecureInnerPagesGuard } from '../../app/shared/guard/secure-inner-pages.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register-user', component: SignUpComponent , canActivate: [SecureInnerPagesGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent , canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'choose-game', component: ChooseGameComponent, canActivate: [AuthGuard] },
  { path: 'create-tournament', component: CreateTournamentComponent, canActivate: [AuthGuard] },
  { path: 'ranking', component: RankingComponent, canActivate: [AuthGuard] },
  { path: 'tournament', component: TournamentComponent, canActivate: [AuthGuard] },
  { path: 'tournament-summary', component: TournamentSummaryComponent, canActivate: [AuthGuard] },
  { path: 'your-tournaments', component: YourTournamentsComponent, canActivate: [AuthGuard] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
