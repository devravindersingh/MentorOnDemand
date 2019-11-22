import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _getTechnology = "https://localhost:5001/api/Admin/Technolgies";
  private _getGuestSearch = "https://localhost:5001/api/mentors/search";
  constructor(private http: HttpClient) {

  }

  getGuestSearch(searchQuery){
    return this.http.post<any>(this._getGuestSearch, searchQuery);
  }



  getTecnologies(){
    return this.http.get<any>(this._getTechnology);
  }
}
