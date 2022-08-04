import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarvelApiService } from 'src/app/services/marvel-api/marvel-api.service';
import { CharDetailsComponent } from '../char-details/char-details.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(
    private marvelApi:MarvelApiService,
    private charDialog: MatDialog
    ) { }

  characters:any=[];
  showSearchResult: boolean = false;

  totalLength:any;
  page:number = 1;

  ngOnInit(): void {
    this.showSearchResult=false;
    this.marvelApi.getCharacters().subscribe((result)=>{
      console.log(result);
      this.characters = result.data.results;
      this.totalLength = result.length;
    })
  }

  openDetails(characterId:string){
    this.charDialog.open(CharDetailsComponent,{
      data: characterId
    })
  }

}
