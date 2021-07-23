import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsProviderService } from '../../shared/services/persons-provider.service';
import { Person } from '../../shared/models/person.model';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
})
export class PersonsListComponent implements OnInit, OnDestroy {
  personsList: Person[] = [];
  personsSub: Subscription;
  displayedColumns: string[];
  constructor(private personsProvider: PersonsProviderService) { }

  ngOnInit(): void {
    this.personsSub = this.personsProvider.data$.subscribe((persons) => {
      this.personsList = persons;
    });
    this.personsProvider.getPersons();
  }

  ngOnDestroy(): void {
    this.personsSub.unsubscribe();
  }

  editPerson(id: string) {
    console.log(id);
  }

  deletePerson(id: string) {
    console.log(id);
  }
}
