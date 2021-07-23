import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PersonProviderService } from '../../shared/services/person-provider.service';
import { Person } from '../../shared/models/person.model';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
})
export class PersonEditComponent implements OnInit, OnDestroy {
  form: FormGroup;
  private subscription: Subscription;
  private person: Person;
  constructor(
    private personProvider: PersonProviderService,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.personProvider.data$.subscribe((data) => {
      this.person = data;
      this.form = new FormGroup(
        {
          name: new FormControl(this.person.name, Validators.required),
          surname: new FormControl(this.person.surname, Validators.required),
        },
      );
    });
    this.personProvider.getPersonById(this.data);
  }

  getErrorMessage(): string {
    return 'You must enter a value';
  }

  submit() {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
