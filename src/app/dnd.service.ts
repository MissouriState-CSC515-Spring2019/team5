import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResults } from './IResults';
import { IResult } from './IResult';

@Injectable({
  providedIn: 'root'
})
export class DndService {

  private baseUrl: string = "https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/";

  constructor(private http: HttpClient) { }

  getClasses(): Observable<IResults> {
    return this.http.get<IResults>(this.baseUrl+"classes");
  }

  getClass(i): Observable<IResult> {
    return this.http.get<IResult>(this.baseUrl+"classes/"+i);
  }

  getRaces(): Observable<IResults> {
    return this.http.get<IResults>(this.baseUrl+"races");
  }

  getRace(i): Observable<IResult> {
    return this.http.get<IResult>(this.baseUrl+"races/"+i);
  }

  getSpells() :Observable<IResults> {
    return this.http.get<IResults>(this.baseUrl+"spells");
  }

  getSpell(i): Observable<IResult> {
    return this.http.get<IResult>(this.baseUrl+"spells/"+i);
  }
}
