import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification-bar',
  template: '',
})
export class NotificationBarComponent {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, className: string): void {
    this.snackBar.open(message, '', {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'end',
      panelClass: [className],
    });
  }
}
