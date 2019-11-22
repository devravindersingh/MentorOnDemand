import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _countAll = "https://localhost:5001/api/admin/count";
  constructor(private http: HttpClient) { }

  getCountAll(){
    return this.http.get<any>(this._countAll);
  }
}
