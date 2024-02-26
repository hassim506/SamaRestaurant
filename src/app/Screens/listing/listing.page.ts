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
 res: any;
 indexOf: any;


 
  constructor(private foodService: FoodService, private router: Router) {
    /*his.foodService.getJsonData().subscribe(()=>{
      alert(JSON.stringify(this.res));
    });*/
   }

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
  public Foods: Food[] =[
    
      {
         id: 1,
         title: "'seadFood'",
          price: 1200,
          image: "'assets/images/Sushi.png'",
          description:"'In addition to the freshet seafood, there are core, cilantro, and tomatoes: their first, became mayonnaise,the second-cream,the third-spice tomato water'"
          
      },
      {
          id: 2,
          title: "'Hamburguer'",
          price: 1600,
         image: "'assets/images/Burguers.png'",
          description:"'In addition to the freshet seafood, there are core, cilantro, and tomatoes: their first, became mayonnaise,the second-cream,the third-spice tomato water'"
      },
      {
          id: 3,
          title: "'Pizza'",
          price: 2500,
          image: "assets/images/Pizza-.png",
          description:"'In addition to the freshet seafood, there are core, cilantro, and tomatoes: their first, became mayonnaise,the second-cream,the third-spice tomato water'"
      },
      {
          id: 4,
          title: "'Chawarma'",
         price: 3500,
          image: "'assets/images/all.png'",
          description:"'In addition to the freshet seafood, there are core, cilantro, and tomatoes: their first, became mayonnaise,the second-cream,the third-spice tomato water'"
      },
      {
          id: 5,
          title: "' Poullet-Roti'",
          price: 2000,
         image: "'assets/images/poullet_roti.png'",
          description:"'In addition to the freshet seafood, there are core, cilantro, and tomatoes: their first, became mayonnaise,the second-cream,the third-spice tomato water'"
      },
      {
          id: 6,
          title: "'Tacos frittes'",
          price: 3000,
          image: "'assets/images/Tacos.png'",
          description:"In addition to the freshet seafood, there are core, cilantro, and tomatoes: their first, became mayonnaise,the second-cream,the third-spice tomato water"
      }
  

  ]
  public results = [...this.Foods];

  handlerInput(event: { target: { value: string; }; }) {
    const query = event.target.value.toLowerCase(); // Convertissez la requête en minuscules pour une comparaison insensible à la casse
    this.results = this.Foods.filter(item => item.title.toLowerCase().includes(query));
}

}



