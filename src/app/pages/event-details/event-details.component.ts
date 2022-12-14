import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/services/marvel-api/marvel-api.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  details:any=[];
  characters:any=[];
  breakpoint!:number;

  totalLength:any;
  page:number = 1;

  constructor(
    private marvelApi:MarvelApiService,
    @Inject(MAT_DIALOG_DATA) public eventId:string
  ) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 :
    this.breakpoint = (window.innerWidth <= 800) ? 2 : 3;
    this.marvelApi.getEventDetails(this.eventId).subscribe((result)=>{
      this.details = result.data.results;
      console.log(this.details)
    });
    this.marvelApi.getEventCharacters(this.eventId).subscribe((result2)=>{
      this.characters = result2.data.results;
      console.log(this.characters)
    });
  }

  handleSize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 :
    this.breakpoint = (event.target.innerWidth <= 800) ? 2 : 3
    }

}
