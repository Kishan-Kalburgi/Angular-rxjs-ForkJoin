import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUrls(url) {
    return this.http.get(url);
  }

  getFilms(url) {
    return this.http.get(url);
  }
}
