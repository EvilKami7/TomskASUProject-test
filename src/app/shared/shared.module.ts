import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PersonsProviderService } from './services/persons-provider.service';
import { PersonProviderService } from './services/person-provider.service';
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component';
import { NotificationService } from './services/notification.service';
import { PersonActionService } from './services/person-action.service';
import { ActionDeterminateService } from './services/action-determinate.service';

@NgModule({
  declarations: [
    NotificationBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [
    PersonsProviderService,
    PersonProviderService,
    PersonActionService,
    NotificationService,
    NotificationBarComponent,
    ActionDeterminateService,
  ],
})
export class SharedModule { }
