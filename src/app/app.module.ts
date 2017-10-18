import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { routes }     from './app-routing.module';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ReinitializePasswordComponent } from './reinitialize-password/reinitialize-password.component';
import { ListeGroupComponent } from './liste-group/liste-group.component';


import { ApiRequestService } from './services/apiRequests.service';
import { ContactCrudService } from './services/contact-crud.service';
import { LoginService } from './services/login.service';
import { HeaderInterceptorService } from './services/header-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';





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
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ApiRequestService,
              ContactCrudService,
              LoginService,
              { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true }
            ],

  bootstrap: [AppComponent]
})
export class AppModule { }
