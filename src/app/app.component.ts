import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Pizza } from './model/pizza';
import { PizzaService } from './service/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PizzApp';
  pizzas!: Pizza[];
  pizzaService: PizzaService

  constructor(private primengConfig: PrimeNGConfig, pizzaService: PizzaService) {
    this.pizzaService = pizzaService;
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.getPizzas()
  }

  private getPizzas() {
    this.pizzaService.getPizzaList().subscribe(data => this.pizzas = data)
  }
}