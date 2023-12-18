import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonformService {

  url = '/assets/form.json';
  
  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get(this.url);
  }
}
