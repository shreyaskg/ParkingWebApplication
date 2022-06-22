import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat'
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from 'src/environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { HomepageComponent } from './component/homepage/homepage.component';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { VehicleService } from 'src/app/shared/vehicle.service';
import { FooterComponent } from './component/footer/footer.component';
import { LocatorComponent } from './component/locator/locator.component';
import { AddvehicleComponent } from './component/addvehicle/addvehicle.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    LocatorComponent,
    AddvehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Importing and initializing firestore
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideAnalytics(() => getAnalytics())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService, VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
