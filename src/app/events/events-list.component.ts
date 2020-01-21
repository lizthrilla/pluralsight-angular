import { Component } from '@angular/core';
@Component({
  selector: 'app-events-list',
  // templateUrl:
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <!-- {{...}} === one way binding-->
      <div class="well hoverwell thumbnail">
        <app-event-thumbnail [event]="event1" ></app-event-thumbnail>
      </div>
    </div>
  `,
  // stylesUrl
  // tslint:disable-next-line: max-line-length
  // styles are scoped so even if you have the same class in multiple components, it won't affect those components if you don't add it to that scopped component
  styles: [`
    .well div { color: #bbb; }
  `]
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
