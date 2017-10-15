import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule}    from '@angular/forms';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";

import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { AppRoutingModule }     from './app-routing.module';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ReinitializePasswordComponent } from './reinitialize-password/reinitialize-password.component';
import { ListeGroupComponent } from './liste-group/liste-group.component';
    

import { ApiRequestService } from './services/apiRequests.service';
import { ContactCrudService } from './services/contact-crud.service';
import { CookieTokenService } from './services/cookie-token.service';

import { HttpClientModule } from '@angular/common/http';

import { CookieModule } from 'ngx-cookie';

    



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    ForgotPasswordComponent,
    ReinitializePasswordComponent,
    EditUserComponent,
    CreateContactComponent,
    EditContactComponent,
    ListContactComponent,
    ContactInfoComponent,
    ListeGroupComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,

    HttpClientModule,
    ReactiveFormsModule,
    CookieModule.forRoot()
  ],
  providers: [ApiRequestService,
     ContactCrudService,
     CookieTokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
