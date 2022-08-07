import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { EventsComponent } from './events/events.component';
import { MainComponent } from './main/main.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const userLoggedOut = () => redirectUnauthorizedTo(['signup']);

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
    ...canActivate(userLoggedOut)
  },
  {
    path: 'events',
    component: EventsComponent,
    ...canActivate(userLoggedOut)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
