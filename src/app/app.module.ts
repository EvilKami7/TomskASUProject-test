import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { HttpErrorInterceptor } from './core/services/http-error-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonsListComponent,
    PersonEditComponent,
    PersonCreateComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
