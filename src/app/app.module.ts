import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LastUsersComponent } from './last-users/last-users.component';
import { UsersComponent } from './users/users.component';
import { ModifyProfileComponent } from './modify-profile/modify-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LastUsersComponent,
    UsersComponent,
    ModifyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
