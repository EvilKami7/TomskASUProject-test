import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PersonActionService } from '../../shared/services/person-action.service';
import { ActionDeterminateService } from '../../shared/services/action-determinate.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss'],
})
export class PersonCreateComponent implements OnInit, OnDestroy {
  form: FormGroup;
  btnDisabled: boolean;
  private createDeterSub: Subscription;

  constructor(private personAction: PersonActionService, private actionDeter: ActionDeterminateService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(null, [Validators.maxLength(15), Validators.required]),
        surname: new FormControl(null, [Validators.maxLength(15), Validators.required]),
      },
    );
    this.createDeterSub = this.actionDeter.createDeterminate$.subscribe((value) => {
      this.btnDisabled = value === 'Pending';
    });
  }

  getErrorMessage(field: string): string {
    if (this.form.get(field)?.hasError('required')) return 'You must enter a value';
    if (this.form.get(field)?.hasError('maxlength')) return 'Length must not extend 15 symbols';
    return '';
  }

  submit(): void {
    this.actionDeter.setCreateDeterminate('Pending');
    this.personAction.createPerson(this.form.getRawValue());
  }

  ngOnDestroy(): void {
    this.createDeterSub?.unsubscribe();
  }
}
