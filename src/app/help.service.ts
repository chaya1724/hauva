import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tableCodeDesc } from './classes/tableCodeDesc';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  baseUrl = "https://localhost:63830/Service1/";

  merchavim: tableCodeDesc[] = [];
  ezorim: tableCodeDesc[] = [];
  yeshuvim: tableCodeDesc[] = [];

  constructor(private http:HttpClient) { }
  getData(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
