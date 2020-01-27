import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
@Component({
  selector: 'app-events-list',
  // templateUrl:
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <!-- {{...}} === one way binding-->
        <div class="row">
          <div class="col-md-5" *ngFor="let event of events">
            <!-- structional element has a * and adds ore removes an element -->
            <!-- let event of events is a ngFor only thing -->
            <app-event-thumbnail class="hoverwell thumbnail" [event]="event"></app-event-thumbnail>

          </div>
        </div>
    </div>
  `,
  // stylesUrl
  // tslint:disable-next-line: max-line-length
  // styles are scoped so even if you have the same class in multiple components, it won't affect those components if you don't add it to that scopped component
  styles: [
    `
      .thumbnail { min-height: 210px;}
      .well div {
        color: #bbb;
      }
    `
  ]
})

// OnInit is imported from angular but the "implements" is type script
export class EventsListComponent implements OnInit {
  events: any[];
  // private is shorthand for saying we have a property on our class see below class for example of non private
  constructor(private eventService: EventService) {
    // potentially long running calls shouldn't be in a constructor and this will be an api call soon
    // kind of like a callback in useEffect
    // this.events = this.eventService.getEvents();
    // don't actually need to have anything in here with the private and the service
  }

  // component lifecycle init aka componentDidMount()
  // also cannot write it as an arrow function
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}


// // what private is short hand for:
// export class EventsListComponent {
//   eventService
//   constructor(private eventService: EventService) {
  //       this.eventService = eventService
  // }
// }
