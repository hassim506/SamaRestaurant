import { Injectable } from "@angular/core";
import { BehaviorSubject} from "rxjs";
import { CartItem } from "../models/cart-item.model";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CartService{
    private items$ = new BehaviorSubject<CartItem[]>([
   
     
    ]);

    //fonction qui permet de recevoir le produit bdans le panier
    getCart(){
        return  this.items$.asObservable();
    }

    //fonction qui permet d'ajouter un produit dans le panier
    addToCart( newItem: CartItem){
        this.items$.next([...this.items$.getValue(), newItem]);
    }

    //fonction qui permet de supprimer un produit dans le panier
    removeItem(id: number){
        this.items$.next(this.items$.getValue().filter(item=>item.id !== id));
    }

    //fontion qui permet de changer la quantité dun produit dans le panier soit en laugmentant soit en le diminuant  
    changQty(quantity: number, id: number){
        const items = this.items$.getValue();
        const index = items.findIndex(item =>  item.id ==  id);
        items[index].quantity += quantity;
        this.items$.next(items);
    }

    //fonction qui permet de recuperer le montant total dans le panier
    getTotalAmount(){
        return this.items$.pipe(map((item) =>{
            let total = 0;
            item.forEach((item)=>{
                total += item.quantity * item.price;
            });
            return total;
        })
        );
    }
}