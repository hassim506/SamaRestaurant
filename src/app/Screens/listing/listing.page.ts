import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
 categories: Category [] = [];
 foods: Food[] = [];

  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
    this.foods = this.foodService.getFoods();
  }

  getCategories(){
    this.categories = [
      {
        id: 1,
        label: 'All',
        image: 'assets/images/icons/four.png',
        active: true,
    },
    {
      id: 2,
      label: 'Pizza',
      image: 'assets/images/icons/Pizza.png',
      active: false,
  },
  {
    id: 3,
    label: 'Poullet',
    image: 'assets/images/icons/poulle.png',
    active: false,
},
{
  id: 4,
  label: 'Sushi',
  image: 'assets/images/icons/Tacos.png',
  active: false,
},
   
    ];
  }
  gotoDetailpage(id: number){
    this.router.navigate(['detail', id]);

  }

}



