import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  CartItem$!: Observable<CartItem[]> ;
  totalAmount$!: Observable<number> ;
  constructor(private cartService: CartService, private alertCtrl: AlertController) { 
    
  }

  ngOnInit() {
    this.CartItem$ = this.cartService.getCart();
    this.totalAmount$ = this.cartService.getTotalAmount();
  }

  onIncrease(item: CartItem){
    this.cartService.changQty(1, item.id);
  }

  onDecrease(item: CartItem){

    if(item.quantity == 1) this.removeFromCart(item);
    else this.cartService.changQty(-1, item.id);
  }

  /*
  La fonction removeFromCart semble être une méthode d'une classe qui est utilisée pour afficher 
  une boîte de dialogue de confirmation de
   suppression d'un élément du panier d'achat.
  */

  async removeFromCart(item: CartItem){

    const alert = await this.alertCtrl.create({
      header: 'Suppression',
      message:'Êtes-vous sûre de vouloir supprimer?',
      buttons: [
        {
          text: 'Oui',
          handler: () => this.cartService.removeItem(item.id),
        },
        {
          text: 'Non',
        },
      ],
    });
    alert.present();

  }

}
