import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated
import { SignInComponent } from '../../app/components/sign-in/sign-in.component';
import { SignUpComponent } from '../../app/components/sign-up/sign-up.component';
import { HomeComponent } from '../../app/components/home/home.component';
import { ForgotPasswordComponent } from '../../app/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../app/components/verify-email/verify-email.component';
// Import canActivate guard services
import { AuthGuard } from '../../app/auth.guard';
import { SecureInnerPagesGuard } from '../../app/shared/guard/secure-inner-pages.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register-user', component: SignUpComponent , canActivate: [SecureInnerPagesGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent , canActivate: [SecureInnerPagesGuard]},
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
