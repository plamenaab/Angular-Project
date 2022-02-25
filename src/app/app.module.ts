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
    PartaiAccListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
