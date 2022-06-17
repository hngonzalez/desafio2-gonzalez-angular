import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/pages/dashboard/dashboard.component';
import { StudentsListComponent } from './features/pages/components/students-list/students-list.component';import { ProfessorListComponent } from './features/pages/components/professor-list/professor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentsListComponent,
    ProfessorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
