import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudyComponent} from './study/study.component';
import {TasksComponent} from './tasks/tasks.component';
import {AdslinkComponent} from './adslink/adslink.component';

const routes: Routes = [
  {path: 'useful', component: StudyComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'adlink', component: AdslinkComponent},
  {path: '**', redirectTo: '/useful'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
