import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloaderComponent } from './downloader/downloader.component';
import { NotAuthComponent } from './not-found/not-auth/not-auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { ParteiComponent } from './partei/partei.component';
import { AddParteiComponent } from './parteien/add-partei/add-partei.component';
import { CanDeactivateGuardService } from './parteien/add-partei/can-deactivate-guard.service';
import { ParteienComponent } from './parteien/parteien.component';
import { AdminGuardService } from './politics/admin-guard.service';
import { PeopleComponent } from './politics/politic/people/people.component';
import { PoliticComponent } from './politics/politic/politic.component';
import { PoliticsComponent } from './politics/politics.component';
import { RouteTesterComponent } from './route-tester/route-tester.component';
import { ViewParteiComponent } from './view-partei/view-partei.component';

const routes: Routes = [
  {path:'observers', component: ObservableDemoComponent},

  {path: 'politics', 
    //canActivate:[AdminGuardService], 
    canActivateChild:[AdminGuardService],
    component: PoliticsComponent, 
    children:[
      {path: ':id', component: PoliticComponent},
      {path: ':id/list', component: PeopleComponent},
    ]
  },
  // {path: 'politics/:id', component: PoliticComponent},
  // {path: 'politics/:id/list', component: PeopleComponent},
  {path:'', component: ParteienComponent},
  {path:'download', component: DownloaderComponent, children:
    [
      {path:'test', component: DownloaderComponent},
    ]
  },
  //{path:'download/test', component: DownloaderComponent},
  {path:'parteilist', component: ParteienComponent},
  {path:'addpartai',
    canDeactivate:[CanDeactivateGuardService],
    component: AddParteiComponent
  },
  {path:'viewpartei/:id', component: ViewParteiComponent},
  {path:'viewpartei', redirectTo:'/parteilist'},
  {path:'404-not-found', component:NotFoundComponent},
  {path:'403-not-auth', component:NotAuthComponent},
  {path:'**', redirectTo:'/404-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
