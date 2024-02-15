import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';





import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
 
 const FIREBASE_CONFIG =  {
  apiKey: "AIzaSyCJeCzutqw2NaURcFYToDENpli_Rh0FNC4",
authDomain: "samarestaurant-5e778.firebaseapp.com",
dataBaseUrl:"https://samarestaurant-5e778-default-rtdb.firebaseio.com",
projectId: "samarestaurant-5e778",
storageBucket: "samarestaurant-5e778.appspot.com",
messagingSenderId: "189899877661",
appId: "1:189899877661:web:c728af36237fb6c2b005f4",
measurementId: "G-3KKJCP5R3L"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(() => initializeApp(FIREBASE_CONFIG)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()), FormsModule,
  ],
  providers: [
  SplashScreen,
  QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}