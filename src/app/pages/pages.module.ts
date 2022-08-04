import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { CharactersComponent } from './characters/characters.component';
import { EventsComponent } from './events/events.component';
import { MaterialModule } from '../shared/material/material.module';
import { CharDetailsComponent } from './char-details/char-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EventDetailsComponent } from './event-details/event-details.component';


@NgModule({
  declarations: [
    MainComponent,
    CharactersComponent,
    EventsComponent,
    CharDetailsComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }
