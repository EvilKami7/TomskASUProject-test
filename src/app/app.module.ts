import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PersonItemComponent } from './components/person-item/person-item.component';
import { PersonsListComponent } from './components/persons-list/persons-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonItemComponent,
    PersonsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
