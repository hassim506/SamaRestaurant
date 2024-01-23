import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  food: Food = {} as Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private toasCtrl: ToastController
     ) {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');

if (idParam !== null) {
  this.id = +idParam;
} else {
  // Gérer le cas où 'id' est null, peut-être en fournissant une valeur par défaut ou en déclenchant une erreur.
   this.id = 0; 
   throw new Error("ID is null");
}
    
   }

  ngOnInit() {
    const foodResult = this.foodService.getFood(this.id);

    if (foodResult !== undefined) {
      this.food = foodResult;
    } else {
      // Gérer le cas où la fonction getFood retourne undefined.
      throw new Error("La fonction getFood a renvoyé undefined.");
      // Peut-être affecter une valeur par défaut à this.food.
    }
  }
  addItemTocart(){
    const cartitem: CartItem ={
      id: this.food.id,
      name: this.food.title,
      price: this.food.price,
      image: this.food.image,
      quantity: 1,
    }

    this.cartService.addToCart(cartitem);
    this.presentToast();
  }
  async presentToast(){
    const toast = await  this.toasCtrl.create({
      message:'Produit ajouter au panier',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }

}
