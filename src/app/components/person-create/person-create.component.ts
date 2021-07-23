import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss'],
})
export class PersonCreateComponent implements OnInit {
  form: FormGroup;
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

  submit() {

  }
}
