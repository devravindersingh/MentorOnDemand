import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _getTechnology = "https://localhost:5001/api/Admin/Technolgies";
  constructor(private http: HttpClient) {

   }

  getTecnologies(){
    return this.http.get<any>(this._getTechnology);
  }
}
