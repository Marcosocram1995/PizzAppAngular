import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Head, Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  getClient(username: string): Observable<Client> {
    let URL = "http://localhost:8080/pizapp/get_user?username="
    return this.httpClient.get<Client>(URL + username)
  }

  createClient(username: string) {
    let URL = "http://localhost:8080/pizapp/create_user?username="
    return this.httpClient.post(URL + username, null)
  }
}