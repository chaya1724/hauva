import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { clsData } from './classes/clsData';
import { tableCodeDesc } from './classes/tableCodeDesc';
import { man } from './classes/Man';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  merchavCode:number=0;
  yeshuvCode:number=0;
  ezorCode:number=0;

  constructor(private http: HttpClient) { }
  BASEURL = "http://localhost:63830/Service1.svc/";

  getData(): Observable<clsData> {
    return this.http.get<clsData>(this.BASEURL + "getData")
  }
  getEzorimByMerchav(merchav:string): Observable<tableCodeDesc[]> {
    this.merchavCode= +merchav+1;
    return this.http.get<tableCodeDesc[]>(this.BASEURL +  "getEzorimByMerchav?merchav=" + this.merchavCode)
  }
  getRellavantPeople( yeshuv:number, merchav:number, ezor:number): Observable<man[]> {debugger
    this.merchavCode= +merchav+1;
    this.yeshuvCode= +yeshuv+1;
    this.ezorCode= +ezor;
    return this.http.get<man[]>(this.BASEURL +  "getRellavantPeople?yeshuv=" + this.yeshuvCode + "&&merchav=" + this.merchavCode + "&&ezor=" + this.ezorCode)
  }
}