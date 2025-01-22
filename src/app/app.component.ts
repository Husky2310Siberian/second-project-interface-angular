import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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

  person0 = {
    givenName: "Bill00",
    surName: "Siberian00",
    age: 90,
    email:"example@example00.com"
  }

  person1 = {
    givenName: "Bill11",
    surName: "Siberian11",
    age: 9,
    email:"example@example11.com"
  }
}
