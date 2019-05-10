import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DClass } from './character/class';
import { IRace } from './character/race';
import { Observable } from 'rxjs';
//import { IClasses } from './character/classes';

/*const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET'
  })
}*/
interface IClasses {
  count: number,
  results: Array<DnDClass>
}

interface DnDClass {
  name: string,
  url: string
}

interface SpellsA {
  count: number, 
  results: Array<SpellS>
}

interface SpellS {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class DndService {

  private baseUrl: string = "https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/";

  private classes = Array<DClass>();

  constructor(private http: HttpClient) { }

  getClasses(): Observable<IClasses> {
    return this.http.get<IClasses>(this.baseUrl+"classes");
  }

  getClass(i): Observable<DnDClass> {
    return this.http.get<DnDClass>(this.baseUrl+"classes/"+i);
  }

  getRaces(): Observable<IClasses> {
    return this.http.get<IClasses>(this.baseUrl+"races");
  }

  getRace(i): Observable<DnDClass> {
    return this.http.get<DnDClass>(this.baseUrl+"races/"+i);
  }

  getSpells() :Observable<SpellsA> {
    return this.http.get<SpellsA>(this.baseUrl+"spells");
  }

  getSpell(i): Observable<SpellS> {
    return this.http.get<SpellS>(this.baseUrl+"spells/"+i);
  }
}
