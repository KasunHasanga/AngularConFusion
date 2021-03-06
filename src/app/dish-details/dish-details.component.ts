import { Component, OnInit, Input } from '@angular/core';
import {Dish} from '../shared/dish';
import{DISHES} from '../shared/dishes';
@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {

  dishes : Dish[]= DISHES;
  @Input()
  dish :Dish;

  constructor() { }

  ngOnInit(): void {
  }

}
