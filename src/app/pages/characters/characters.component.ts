import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged, filter, tap, Observable, fromEvent } from 'rxjs';
import { MarvelApiService } from 'src/app/services/marvel-api/marvel-api.service';
import { CharDetailsComponent } from '../char-details/char-details.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(
    private marvelApi:MarvelApiService,
    private charDialog: MatDialog
    ) { }

  characters:any=[];
  charName!:string;
  showSearchResult!: boolean;
  searchedChar:any=[];
  breakpoint!:number;

  totalLength:any;
  page:number = 1;

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 :
    this.breakpoint = (window.innerWidth <= 800) ? 2 : 3;
    this.showSearchResult=false;
    this.marvelApi.getCharacters().subscribe((result)=>{
      console.log(result);
      this.characters = result.data.results;
      this.totalLength = result.length;
    })
  }

  openDetails(characterId:string){
    this.charDialog.open(CharDetailsComponent,{
      data: characterId,
      width: '70vw',
      height:'70vh',
      maxWidth: '100vw',
      panelClass: 'custom-modalbox'
    })
  }

  searchCharacter(event:any){
    this.charName = event.target.value;
    this.marvelApi.getCharacterByName(this.charName).subscribe((result)=>{
      if(result.data.count>0){
        this.showSearchResult = true;
        this.searchedChar = result.data.results;
      }
      else{
        this.ngOnInit();
      }
    })
  }

  handleSize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 :
    this.breakpoint = (event.target.innerWidth <= 800) ? 2 : 3
    }

}
