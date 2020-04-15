import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ConverterComponent } from './components/converter/converter.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'converter', component: ConverterComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'user/list', component: UserListComponent},
  {path: 'user/login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
