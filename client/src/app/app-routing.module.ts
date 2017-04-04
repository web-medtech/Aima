import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DonnorsComponent } from './components/donnors/donnors.component';
import { ReceiversListComponent } from './components/receivers-list/receivers-list.component';
import { CriticalConditionListComponent } from './components/critical-condition-list/critical-condition-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'donneurs', component: DonnorsComponent },
  { path: 'receveurs', component: ReceiversListComponent },
  { path: 'cas-critiques', component: CriticalConditionListComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
