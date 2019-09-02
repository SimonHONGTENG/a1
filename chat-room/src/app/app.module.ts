import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsComponent } from './groups/groups.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    UsersComponent,
    LoginComponent,
    LogoutComponent,
    UserDetailComponent,
    GroupDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
