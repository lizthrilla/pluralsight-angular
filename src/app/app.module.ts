import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
// tslint:disable-next-line: quotemark
import { EventsListComponent, EventThumbnailComponent } from "../app/events";
import { NavBarComponent } from './nav/nav-bar.component';
import { EventService } from './events/shared/event.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
