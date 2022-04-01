import { NgModule, SimpleChange } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CnjokesComponent } from './cnjokes/cnjokes.component';
import { ParteienFilterPipe } from './parteien/parteien-filter.pipe';
import { PeopleFilterPipe } from './politics/politic/people/people-filter.pipe';
import { politicsShortenPipe } from './politics/politicsShorten.pipe';
import { UserRformComponent } from './user-rform/user-rform.component';
import { ChatappComponent } from './chatapp/chatapp.component';
import { ChatmsgsComponent } from './chatapp/chatmsgs/chatmsgs.component';
import { SendmsgsComponent } from './chatapp/sendmsgs/sendmsgs.component';
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
    ObservableDemoComponent,
    UserFormComponent,
    UserRformComponent,
    politicsShortenPipe,
    PeopleFilterPipe,
    ParteienFilterPipe,
    CnjokesComponent,
    ChatappComponent,
    ChatmsgsComponent,
    SendmsgsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LoggingService, ParteiDataService, LoginService, AdminGuardService, CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
