import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {appStateReducer} from './ngrx/app.state';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {UsersEffects} from './ngrx/effect/users.effect';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { TopBarComponent } from './pages/top-bar/top-bar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MapComponent } from './pages/map/map.component';
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    MainLayoutComponent,
    TopBarComponent,
    FooterComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    StoreModule.forRoot(appStateReducer),
    EffectsModule.forRoot([UsersEffects]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
