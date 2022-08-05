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
  searchedEvent: any=[];
  filter:string = "Choose a team";

  totalLength:any;
  page:number = 1;

  ngOnInit(): void {
    this.showSearchResult=false;
    this.marvelApi.getEvents().subscribe((result)=>{
      console.log(result);
      this.events = result.data.results;
      this.totalLength = result.length;
    })
    this.filter = "Choose a team";
  }

  openDetails(eventId:string){
    this.eventDialog.open(EventDetailsComponent,{
      data: eventId,
      width: '70vw',
      height:'80vh',
      maxWidth: '100vw',
      maxHeight: '100vh'
    })
  }

  filterEventByChar(characterId:string){
    this.marvelApi.getEventsByCharacter(characterId).subscribe((result)=>{
      this.showSearchResult=true;
      this.searchedEvent = result.data.results;
    })
    if(characterId==="1009165"){
      this.filter="Avengers";
    } else {
      this.filter="X-Men";
    }
  }

}
