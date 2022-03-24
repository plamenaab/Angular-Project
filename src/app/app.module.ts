import { NgModule, SimpleChange } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParteiComponent } from './partei/partei.component';
import { ParteienComponent } from './parteien/parteien.component';
import { ErrorsComponent } from './errors/errors.component';
import { SuccessComponent } from './success/success.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ShowHintComponent } from './show-hint/show-hint.component';
import { AddParteiComponent } from './parteien/add-partei/add-partei.component';
import { ParteiListComponent } from './partei/partei-list/partei-list.component';
import { CandidateListComponent } from './partei/candidate-list/candidate-list.component';
import { PartaiAccListComponent } from './parteien/partai-acc-list/partai-acc-list.component';
import { FirstDirective } from './first-directive/app-first-directive';
import { SecondDirectiveDirective } from './second-directive/second-directive.directive';
import { SecondDir2Directive } from './second-directive/second-dir2.directive';
import { StructuralDirective } from './structural.directive';
import { LoggingService } from './services/logging.service';
import { CanDeactivateGuardService } from './parteien/add-partei/can-deactivate-guard.service';
import { ViewParteiComponent } from './view-partei/view-partei.component';
import { NotAuthComponent } from './not-found/not-auth/not-auth.component';
import { RouteTesterComponent } from './route-tester/route-tester.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PoliticComponent } from './politics/politic/politic.component';
import { PoliticsComponent } from './politics/politics.component';
import { PeopleComponent } from './politics/politic/people/people.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { ParteiDataService } from './services/parteiData.service';
import { LoginService } from './services/login.service';
import { AdminGuardService } from './politics/admin-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    ParteiComponent,
    ParteienComponent,
    ErrorsComponent,
    SuccessComponent,
    DownloaderComponent,
    UserinfoComponent,
    ShowHintComponent,
    AddParteiComponent,
    ParteiListComponent,
    CandidateListComponent,
    PartaiAccListComponent,
    FirstDirective,
    SecondDirectiveDirective,
    SecondDir2Directive,
    StructuralDirective,
    RouteTesterComponent,
    ViewParteiComponent,
    NotFoundComponent,
    PoliticsComponent,
    PoliticComponent,
    PeopleComponent,
    NotAuthComponent,
    ObservableDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [LoggingService, ParteiDataService, LoginService, AdminGuardService, CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
