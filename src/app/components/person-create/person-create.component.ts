import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonRequest } from '../../shared/models/person-request.model';
import { PersonActionService } from '../../shared/services/person-action.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss'],
})
export class PersonCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private personAction: PersonActionService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        surname: new FormControl(null, Validators.required),
      },
    );
  }

  getErrorMessage(): string {
    return 'You must enter a value';
  }

  submit(): void {
    this.personAction.createPerson(this.form.getRawValue(), () => {

    });
  }
}
