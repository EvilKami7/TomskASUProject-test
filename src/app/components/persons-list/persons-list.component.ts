import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PersonsProviderService } from '../../shared/services/persons-provider.service';
import { Person } from '../../shared/models/person.model';
import { PersonEditComponent } from '../person-edit/person-edit.component';
import { PersonCreateComponent } from '../person-create/person-create.component';
import { PersonActionService } from '../../shared/services/person-action.service';
import { ActionDeterminateService } from '../../shared/services/action-determinate.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
})
export class PersonsListComponent implements OnInit, OnDestroy {
  personsList: Person[] = [];
  personsSub: Subscription;
  displayedColumns: string[];
  private dialogCreateSubscription: Subscription;
  private dialogEditSubscription: Subscription;
  private createSub: Subscription;
  private editSub: Subscription;
  constructor(private personsProvider: PersonsProviderService,
    private personAction: PersonActionService,
    private actionDeterminate: ActionDeterminateService,
    public dialogCreate: MatDialog,
    public dialogEdit: MatDialog) { }

  ngOnInit(): void {
    this.personsSub = this.personsProvider.data$.subscribe((persons) => {
      this.personsList = persons;
    });
    this.personsProvider.getPersons();
    this.createSub = this.actionDeterminate.createDeterminate$.subscribe((value) => {
      if (value === 'Success' || value === 'Error') this.dialogCreate.closeAll();
    });
    this.editSub = this.actionDeterminate.editDeterminate$.subscribe((value) => {
      if (value === 'Success' || value === 'Error') this.dialogEdit.closeAll();
    });
  }

  ngOnDestroy(): void {
    this.personsSub?.unsubscribe();
    this.dialogCreateSubscription?.unsubscribe();
    this.dialogEditSubscription?.unsubscribe();
    this.createSub?.unsubscribe();
  }

  editPerson(id: string): void {
    const dialogRef = this.dialogEdit.open(PersonEditComponent, { data: id });
    this.dialogEditSubscription = dialogRef.afterClosed().subscribe(() => {
      this.personsProvider.getPersons();
      this.actionDeterminate.setEditDeterminate('Initial');
    });
  }

  deletePerson(id: string): void {
    this.personAction.deletePerson(id, () => {
      this.personsProvider.getPersons();
    });
  }

  createPerson(): void {
    const dialogRef = this.dialogCreate.open(PersonCreateComponent);
    this.dialogCreateSubscription = dialogRef.afterClosed().subscribe(() => {
      this.personsProvider.getPersons();
      this.actionDeterminate.setCreateDeterminate('Initial');
    });
  }
}
