import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule} from '@angular/common/http';

import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';
import { DatePicker } from '@ionic-native/date-picker';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { MeetingCreatePage } from '../pages/meeting-create/meeting-create';
import { MeetingListPage } from '../pages/meeting-list/meeting-list';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { MeetingSchedulePage } from '../pages/meeting-schedule/meeting-schedule';
import { MeetingDelayPage } from '../pages/meeting-delay/meeting-delay';
import { MeetingInfoPage } from '../pages/meeting-info/meeting-info';
import { MeetingScheduleManangerPage } from '../pages/meeting-schedule-mananger/meeting-schedule-mananger';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MeetingProvider } from '../providers/meeting/meeting';
import { PeopleProvider } from '../providers/people/people';
import { GOOGLE_MAPS_API_KEY } from '../models/consts';
import { BoraagoraPage } from '../pages/boraagora/boraagora';
import { BoraHojePage } from '../pages/bora-hoje/bora-hoje';
import { SlidesHomePage } from '../pages/slides-home/slides-home';

@NgModule({
  declarations: [
    SlidesHomePage,
    BoraHojePage,
    BoraagoraPage,
    MyApp,
    TabsPage,
    LoginPage,
    MapPage,
    MeetingCreatePage,
    MeetingDelayPage,
    MeetingInfoPage,
    MeetingListPage,
    MeetingSchedulePage,
    UserProfilePage,
    MeetingScheduleManangerPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot(GOOGLE_MAPS_API_KEY),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SlidesHomePage,
    BoraHojePage,
    BoraagoraPage,
    MyApp,
    TabsPage,
    LoginPage,
    MapPage,
    MeetingCreatePage,
    MeetingDelayPage,
    MeetingInfoPage,
    MeetingListPage,
    MeetingSchedulePage,
    UserProfilePage,
    MeetingScheduleManangerPage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MeetingProvider,
    PeopleProvider,
    Geolocation,
    DatePicker
  ]
})
export class AppModule {}
