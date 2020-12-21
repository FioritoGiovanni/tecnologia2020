import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  obsFood: Observable<Object>
  prodotto:any;
  foodServiceObs:Observable<Object>
  constructor(public food : FoodService,
    private route: ActivatedRoute,
    private service: FoodService,
    private location : Location) { }

  ngOnInit(): void {
    this.obsFood = this.route.paramMap;
    this.obsFood.subscribe(this.getRouterParam);
  }

  getRouterParam = (params : ParamMap) =>
  {
    let foodId = params.get('id');
    console.log(foodId);

    this.foodServiceObs = this.service.getFoodid(foodId);
    this.foodServiceObs.subscribe((data)=>this.prodotto = data);
  }
  back():void{
    this.location.back();
  }
}
