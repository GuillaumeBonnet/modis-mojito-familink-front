import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { ChooseGroupComponent } from './choose-group/choose-group.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactsInfoComponent } from './contacts-info/contacts-info.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    ForgotPasswordComponent,
    NewPasswordComponent,
    CreateGroupComponent,
    ChooseGroupComponent,
    EditUserComponent,
    CreateContactComponent,
    ContactsInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
