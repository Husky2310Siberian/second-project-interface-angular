import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './shared/interfaces/person';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example-2';

  person = {
    givenName: "Bill",
    surName: "Siberian",
    age: 34,
    email:"example@example.gr"
  }

  person0: Person = {
    givenName: "Bill00",
    surName: "Siberian00",
    age: 90,
    email:"example@example00.com"
  }

  person1: Person = {
    givenName: "Bill11",
    surName: "Siberian11",
    age: 11,
    email:"example@example11.com"
  }
}