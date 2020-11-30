import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {appStateReducer} from './ngrx/app.state';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {UsersEffects} from './ngrx/effect/users.effect';
import { LoginComponent } from './pages/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ModalComponent } from './common/components/modal/modal.component';
import { AddUserDialogComponent } from './pages/add-user-dialog/add-user-dialog.component';

@NgModule({
  declarations: [
    AddUserDialogComponent,
    AppComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    StoreModule.forRoot(appStateReducer),
    EffectsModule.forRoot([UsersEffects]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddUserDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
