// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from '../shared/routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChooseGameComponent } from './components/choose-game/choose-game.component';
import { HttpClientModule} from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { CreateTournamentComponent } from './components/create-tournament/create-tournament.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { TournamentSummaryComponent } from './components/tournament-summary/tournament-summary.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { YourTournamentsComponent } from './components/your-tournaments/your-tournaments.component';

// Services
import { AuthService } from './auth.service';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    NavbarComponent,
    ChooseGameComponent,
    CreateTournamentComponent,
    RankingComponent,
    TournamentComponent,
    TournamentSummaryComponent,
    YourTournamentsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthService,
    DataService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
