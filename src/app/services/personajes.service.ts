import { Injectable } from '@angular/core';
import { Personajes } from '../models/personajes.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/personajes';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Personajes[]>{
    return this.http.get<Personajes[]>(baseUrl);
  }

  get(id: any): Observable<Personajes>{
    return this.http.get(`$(baseUrl)/$(id)`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`$(baseUrl)/$(id)`, data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`$(baseUrl)/$(id)`);
  }

  deleteAll(): Observable<any>{
    return this.http.delete(baseUrl);
  }
}
