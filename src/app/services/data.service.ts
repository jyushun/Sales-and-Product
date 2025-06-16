import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesItem } from '../models/salesitem';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = '';

  constructor(private http: HttpClient) {}

  getData(): Observable<SalesItem[]> {
    return this.http.get<SalesItem[]>(this.apiUrl);
  }
}
