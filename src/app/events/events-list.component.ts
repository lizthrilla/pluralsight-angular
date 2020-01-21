import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <!-- {{...}} === one way binding-->
      <div class="well hoverwell thumbnail">
        <!--  #thumbnail is making it a 'variable' aka it's giving it an id that we are then calling elsewhere-->
        <app-event-thumbnail #thumbnail [event]="event1" ></app-event-thumbnail>
        <h3>{{thumbnail.someProperty}}</h3>
        <button class='btn btn-primary' (click)="thumbnail.logFoo()">Log</button>
      </div>
    </div>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: "Angular Connect",
    date: "9/26/2036",
    time: "10:00 am",
    price: 599.99,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "1057 DT",
      city: "London",
      country: "England"
    }
  };
}
