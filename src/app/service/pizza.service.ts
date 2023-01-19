import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../model/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private URL: string = "http://localhost:8080/pizapp/list"

  constructor(private httpClient: HttpClient) { }

  getPizzaList(): Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>(this.URL)
  }
}