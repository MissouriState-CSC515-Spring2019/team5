import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DClass } from './character/class';
import { IRace } from './character/race';
import { Observable } from 'rxjs';
//import { IClasses } from './character/classes';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET'
  })
}
console.log(httpOptions);
interface IClasses {
  count: number,
  results: Array<DnDClass>
}

interface DnDClass {
  name: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class DndService {

  private baseUrl: string = "http://dnd5eapi.co/api/";

  private classes = Array<DClass>();

  constructor(private http: HttpClient) { }

  getClasses(): Observable<IClasses> {
    let classNames = this.http.get<IClasses>(this.baseUrl+"classes", httpOptions);
    return classNames;
  }

  getClassesFetch() {
    fetch(this.baseUrl+"classes", {method: "GET", headers: {"content-type": "application/json"}})
    .then(function(response) {
      console.log(response)
    });
    return [];
  }

  getRaces(): Observable<IRace[]> {
    let races = this.http.get<IRace[]>(this.baseUrl+"races", httpOptions);
    return races;
  }
}
