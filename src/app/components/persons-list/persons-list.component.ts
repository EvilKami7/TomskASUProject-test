import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PersonsProviderService } from '../../shared/services/persons-provider.service';
import { Person } from '../../shared/models/person.model';
import { PersonEditComponent } from '../person-edit/person-edit.component';
import {PersonCreateComponent} from "../person-create/person-create.component";

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
  constructor(private personsProvider: PersonsProviderService, public dialog: MatDialog) { }

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
    });
  }

  deletePerson(id: string) {
    console.log(id);
  }

  createPerson() {
    const dialogRef = this.dialog.open(PersonCreateComponent);
    this.dialogSubscription = dialogRef.afterClosed().subscribe(() => {
    });
  }
}
