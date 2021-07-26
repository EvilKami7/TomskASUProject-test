import {
  Component, Inject, OnDestroy, OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PersonProviderService } from '../../shared/services/person-provider.service';
import { Person } from '../../shared/models/person.model';
import { PersonActionService } from '../../shared/services/person-action.service';
import { ActionDeterminateService } from '../../shared/services/action-determinate.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
})
export class PersonEditComponent implements OnInit, OnDestroy {
  form: FormGroup;
  private subscription: Subscription;
  private person: Person;
  private editDeterSub: Subscription;
  btnDisabled = false;
  constructor(
    private personProvider: PersonProviderService,
    private personAction: PersonActionService,
    private actionDeter: ActionDeterminateService,
    @Inject(MAT_DIALOG_DATA) private id: string,
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
    this.personProvider.getPersonById(this.id);
    this.editDeterSub = this.actionDeter.editDeterminate$.subscribe((value) => {
      this.btnDisabled = value === 'Pending';
    });
  }

  getErrorMessage(): string {
    return 'You must enter a value';
  }

  submit(): void {
    this.actionDeter.setEditDeterminate('Pending');
    this.personAction.updatePerson(this.id, this.form.getRawValue());
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.editDeterSub?.unsubscribe();
  }
}
