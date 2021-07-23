import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PersonsProviderService } from '../../shared/services/persons-provider.service';
import { Person } from '../../shared/models/person.model';
import { PersonEditComponent } from '../person-edit/person-edit.component';
import { PersonCreateComponent } from '../person-create/person-create.component';
import { PersonActionService } from '../../shared/services/person-action.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
})
export class PersonsListComponent implements OnInit, OnDestroy {
  personsList: Person[] = [];
  personsSub: Subscription;
  displayedColumns: string[];
  private dialogSubscription: Subscription;
  constructor(private personsProvider: PersonsProviderService,
    private personAction: PersonActionService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.personsSub = this.personsProvider.data$.subscribe((persons) => {
      this.personsList = persons;
    });
    this.personsProvider.getPersons();
  }

  ngOnDestroy(): void {
    this.personsSub?.unsubscribe();
    this.dialogSubscription?.unsubscribe();
  }

  editPerson(id: string): void {
    const dialogRef = this.dialog.open(PersonEditComponent, { data: id });
    this.dialogSubscription = dialogRef.afterClosed().subscribe(() => {
      this.personsProvider.getPersons();
    });
  }

  deletePerson(id: string): void {
    this.personAction.deletePerson(id, () => {
      this.personsProvider.getPersons();
    });
  }

  createPerson(): void {
    const dialogRef = this.dialog.open(PersonCreateComponent);
    this.dialogSubscription = dialogRef.afterClosed().subscribe(() => {
      this.personsProvider.getPersons();
    });
  }
}
