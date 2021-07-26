import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActionDeter } from '../types/action-deter.type';

@Injectable({
  providedIn: 'root',
})
export class ActionDeterminateService {
  createDeterminate$: Observable<ActionDeter>;
  editDeterminate$: Observable<ActionDeter>;
  private createDeter = new BehaviorSubject<ActionDeter>('Initial');
  private editDeter = new BehaviorSubject<ActionDeter>('Initial');

  protected constructor(private http: HttpClient) {
    this.createDeterminate$ = this.createDeter.asObservable();
    this.editDeterminate$ = this.editDeter.asObservable();
  }

  setCreateDeterminate(value: ActionDeter): void {
    this.createDeter.next(value);
  }

  setEditDeterminate(value: ActionDeter): void {
    this.editDeter.next(value);
  }
}
