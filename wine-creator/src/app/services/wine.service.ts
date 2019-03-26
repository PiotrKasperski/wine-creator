import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private wineUrl='http://localhost:3000/wine';

  constructor(private http: HttpClient) { }

  getWineList(){
    return this.http.get(this.wineUrl);
  }
  getWine(wineId: number){
    return this.http.get(this.wineUrl+'/'+wineId);
  }
}
