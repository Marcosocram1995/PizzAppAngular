import { Component } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})

export class PizzaListComponent {
  app: AppComponent
  direction: string

  constructor(app: AppComponent) {
    this.app = app
    this.direction = this.knowDirection()
  }

  knowDirection(): string {
    let direction = "horizontal";

    if (window.innerHeight > window.innerWidth) {
      direction = "vertical"
    }

    return direction
  }


}