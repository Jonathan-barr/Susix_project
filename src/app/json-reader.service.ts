import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonReaderService {

  constructor(private http: HttpClient) {}

  getJsonData(fileName: string): Observable<any> {
    // return this.http.get<any>(`./assets/json-data/${fileName}.json`);
    return this.http.get<any>(`../assets/Json/${fileName}.json`);
  }
}
