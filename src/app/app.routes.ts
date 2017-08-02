import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyApp } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { MembersComponent } from '../pages/members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from '../pages/signup/signup.component';
import { EmailComponent } from '../pages/email/email.component';
import { AnchorsPage } from '../pages/anchors/anchors';
import { ResultsPage } from '../pages/results/results';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'anchors', component: AnchorsPage },
    { path: 'results', component: ResultsPage }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);