import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarvelApiService } from 'src/app/services/marvel-api/marvel-api.service';
import { EventDetailsComponent } from '../event-details/event-details.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(
    private marvelApi: MarvelApiService,
    private eventDialog: MatDialog
  ) { }

  events:any=[];
  showSearchResult: boolean = false;

  totalLength:any;
  page:number = 1;

  ngOnInit(): void {
    this.showSearchResult=false;
    this.marvelApi.getEvents().subscribe((result)=>{
      console.log(result);
      this.events = result.data.results;
      this.totalLength = result.length;
    })
  }

  openDetails(eventId:string){
    this.eventDialog.open(EventDetailsComponent,{
      data: eventId
    })
  }

}
