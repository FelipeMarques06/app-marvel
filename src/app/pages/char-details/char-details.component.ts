import { Observable } from 'rxjs';
import { MarvelApiService } from 'src/app/services/marvel-api/marvel-api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.scss']
})
export class CharDetailsComponent implements OnInit {

  details:any=[];
  comics:any=[];

  totalLength:any;
  page:number = 1;

  constructor(
    private marvelApi: MarvelApiService,
    @Inject(MAT_DIALOG_DATA) public characterId: string
    ) { }

  ngOnInit(): void {
    this.marvelApi.getCharacterDetails(this.characterId).subscribe((result)=>{
      console.log(result);
      this.details = result.data.results;
      console.log(this.details)
    })
    this.marvelApi.getCharactersComics(this.characterId).subscribe((result2)=>{
      this.comics = result2.data.results;
      this.totalLength = result2.length;
      console.log(this.comics);
    })
  }

}
