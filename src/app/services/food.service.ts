import { Injectable } from "@angular/core";
import { Food } from "../models/food.model";

@Injectable({
    providedIn: 'root'
})
export class FoodService{
    getFoods(): Food[]{
        return[
            {
                id: 1,
                title: 'seadFood',
                price: 1200,
                image: 'assets/images/Sushi.png',
                description:'In addition to the freshet seafood, there are core, cilantro, and tomatoes: their first, became mayonnaise,the second-cream,the third-spice tomato water'
            },
            {
                id: 2,
                title: 'Hamburguer',
                price: 1600,
                image: 'assets/images/Burguers.png',
                description:'In addition to the freshet seafood, there are core, cilantro, and tomatoes: their first, became mayonnaise,the second-cream,the third-spice tomato water'
            },
            {
                id: 3,
                title: 'Pizza',
                price: 2500,
                image: 'assets/images/Pizza-.png',
                description:'In addition to the freshet seafood, there are core, cilantro, and tomatoes: their first, became mayonnaise,the second-cream,the third-spice tomato water'
            },
            {
                id: 4,
                title: 'Chawarma',
                price: 3500,
                image: 'assets/images/all.png',
                description:'In addition to the freshet seafood, there are core, cilantro, and tomatoes: their first, became mayonnaise,the second-cream,the third-spice tomato water'
            },
            {
                id: 5,
                title: 'Ensemble tacos frittes',
                price: 2000,
                image: 'assets/images/Pizza-.png',
                description:'In addition to the freshet seafood, there are core, cilantro, and tomatoes: their first, became mayonnaise,the second-cream,the third-spice tomato water'
            },
            {
                id: 6,
                title: 'Poullet-Rotti',
                price: 3000,
                image: 'assets/images/Pizza-.png',
                description:'In addition to the freshet seafood, there are core, cilantro, and tomatoes: their first, became mayonnaise,the second-cream,the third-spice tomato water'
            },
        ];


    }

    getFood(id: number): Food | undefined {
        return this.getFoods().find((food) => food.id == id);
    }
}