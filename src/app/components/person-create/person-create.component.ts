import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PersonActionService } from '../../shared/services/person-action.service';
import { ActionDeterminateService } from '../../shared/services/action-determinate.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss'],
})
export class PersonCreateComponent implements OnInit {
  form: FormGroup;
  private editDeterSub: Subscription;
  btnDisabled: boolean;

  constructor(private personAction: PersonActionService, private actionDeter: ActionDeterminateService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        surname: new FormControl(null, Validators.required),
      },
    );
    this.editDeterSub = this.actionDeter.editDeterminate$.subscribe((value) => {
      this.btnDisabled = value === 'Pending';
    });
  }

  getErrorMessage(): string {
    return 'You must enter a value';
  }

  submit(): void {
    this.actionDeter.setCreateDeterminate('Pending');
    this.personAction.createPerson(this.form.getRawValue());
  }
}
