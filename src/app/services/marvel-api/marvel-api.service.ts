import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(private http: HttpClient) { }

  baseUrl="https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=29a0ce3cb104e468f9082e31fd5e544f&hash=6edbb1d327d97efeded233382d8527e8"

  getCharacters():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  getCharacterDetails(characterId:string):Observable<any>{
    const charDetailsUrl=`https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=1&apikey=29a0ce3cb104e468f9082e31fd5e544f&hash=6edbb1d327d97efeded233382d8527e8`
    return this.http.get(charDetailsUrl)
  }
}
