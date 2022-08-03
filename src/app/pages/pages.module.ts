import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { CharactersComponent } from './characters/characters.component';
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [
    MainComponent,
    CharactersComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
