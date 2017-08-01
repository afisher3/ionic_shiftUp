import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartModule } from 'angular2-chartjs';
import { AngularFireModule } from 'angularfire2';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { AngularFireAuth } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AnchorsPage } from '../pages/anchors/anchors';
import { ResultsPage } from '../pages/results/results';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { EmailComponent } from '../pages/email/email.component';
import { MembersComponent } from '../pages/members/members.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyAXNDUogsugjlfA_8ymTf0y8GiODbI5RUs',
    authDomain: 'whole-brain.firebaseapp.com',
    databaseURL: 'https://whole-brain.firebaseio.com',
    projectId: 'whole-brain',
    storageBucket: 'whole-brain.appspot.com',
    messagingSenderId: '479421709795'
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AnchorsPage,
    ResultsPage,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AnchorsPage,
    ResultsPage,
    LoginComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthGuard
  ]
})
export class AppModule {}
