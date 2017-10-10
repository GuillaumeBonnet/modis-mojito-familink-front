import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import {LoginComponent } from "./login/login.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { ForgotPasswordComponent }   from './forgot-password/forgot-password.component';
import { NewPasswordComponent }      from './new-password/new-password.component';
import { CreateGroupComponent }  from './create-group/create-group.component';
import { ChooseGroupComponent }  from './choose-group/choose-group.component';
import { EditUserComponent }  from './edit-user/edit-user.component';
import { CreateContactComponent }  from './create-contact/create-contact.component';
import { ContactsInfoComponent }  from './contacts-info/contacts-info.component';


 
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'forgot-password',     component: ForgotPasswordComponent },
  { path: 'new-password',     component: NewPasswordComponent },
  { path: 'create-group',     component: CreateGroupComponent },
  { path: 'choose-group',     component: ChooseGroupComponent },
  { path: 'edit-user',     component: EditUserComponent },
  { path: 'create-contact',     component: CreateContactComponent },
  { path: 'contact-info',     component: ContactsInfoComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}