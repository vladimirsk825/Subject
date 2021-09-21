import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsyncSubjectComponent } from './components/async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { RelaySubjectComponent } from './components/relay-subject/relay-subject.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncSubjectComponent,
    BehaviorSubjectComponent,
    RelaySubjectComponent,
    SubjectComponent,
    ReplaySubjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
