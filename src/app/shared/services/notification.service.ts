import { Injectable } from '@angular/core';
import { NotificationBarComponent } from '../components/notification-bar/notification-bar.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notificationBar: NotificationBarComponent) { }

  showSuccess(message: string): void {
    this.notificationBar.openSnackBar(message, 'green-snackbar');
  }

  showError(message: string): void {
    this.notificationBar.openSnackBar(message, 'red-snackbar');
  }
}
