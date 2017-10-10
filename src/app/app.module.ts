import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChooseGroupComponent } from './choose-group/choose-group.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

import { AppRoutingModule }     from './app-routing.module';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ReinitializePasswordComponent } from './reinitialize-password/reinitialize-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    ForgotPasswordComponent,
    ReinitializePasswordComponent,
    ChooseGroupComponent,
    EditUserComponent,
    CreateContactComponent,
    EditContactComponent,
    ListContactComponent,
    ContactInfoComponent,
    
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
