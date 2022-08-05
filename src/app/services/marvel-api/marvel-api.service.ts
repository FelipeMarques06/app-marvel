import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(private http: HttpClient) { }

  baseUrl="https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=29a0ce3cb104e468f9082e31fd5e544f&hash=6edbb1d327d97efeded233382d8527e8"
  baseUrlEvents="https://gateway.marvel.com:443/v1/public/events?limit=100&ts=1&apikey=29a0ce3cb104e468f9082e31fd5e544f&hash=6edbb1d327d97efeded233382d8527e8"

  getCharacters():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  getCharacterDetails(characterId:string):Observable<any>{
    const charDetailsUrl=`https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=1&apikey=29a0ce3cb104e468f9082e31fd5e544f&hash=6edbb1d327d97efeded233382d8527e8`
    return this.http.get(charDetailsUrl);
  }

  getCharactersComics(characterId:string):Observable<any>{
    const charDetails2Url=`https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?limit=100&ts=1&apikey=29a0ce3cb104e468f9082e31fd5e544f&hash=6edbb1d327d97efeded233382d8527e8`
    return this.http.get(charDetails2Url);
  }

  getCharacterByName(charName:string):Observable<any>{
    const charNameUrl=`https://gateway.marvel.com:443/v1/public/characters?name=${charName}&ts=1&apikey=29a0ce3cb104e468f9082e31fd5e544f&hash=6edbb1d327d97efeded233382d8527e8`
    return this.http.get(charNameUrl);
  }

  getEvents():Observable<any>{
    return this.http.get(this.baseUrlEvents);
  }

  getEventDetails(eventId:string):Observable<any>{
    const eventDetailsUrl=`https://gateway.marvel.com:443/v1/public/events/${eventId}?ts=1&apikey=29a0ce3cb104e468f9082e31fd5e544f&hash=6edbb1d327d97efeded233382d8527e8`;
    return this.http.get(eventDetailsUrl);
  }

  getEventCharacters(eventId:string):Observable<any>{
    const eventDetails2Url=`https://gateway.marvel.com:443/v1/public/events/${eventId}/characters?limit=100&ts=1&apikey=29a0ce3cb104e468f9082e31fd5e544f&hash=6edbb1d327d97efeded233382d8527e8`
    return this.http.get(eventDetails2Url);
  }

  getEventsByCharacter(characterId:string):Observable<any>{
    const eventsByCharUrl=`https://gateway.marvel.com:443/v1/public/characters/${characterId}/events?limit=100&ts=1&apikey=29a0ce3cb104e468f9082e31fd5e544f&hash=6edbb1d327d97efeded233382d8527e8`
    return this.http.get(eventsByCharUrl);
  }
}
