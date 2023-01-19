import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/service/client-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  badge: any
  app: AppComponent
  username!: string
  clientService: ClientService
  client!: Client
  userRegistered: boolean

  constructor(app: AppComponent, clientService: ClientService) {
    this.noBadge()
    this.app = app
    this.clientService = clientService
    this.userRegistered = false
  }

  noBadge() {
    if (this.badge <= 0) {
      this.badge = ""
    }
  }

  createClient() {
    if (this.username != undefined) {
      this.clientService.getClient(this.username).subscribe(data => this.client = data)
      if (this.client == undefined) {
        this.clientService.createClient(this.username).subscribe()
        this.userRegistered = true
      }
    }
  }
}