import { Injectable } from "@angular/core";
import { BehaviorSubject} from "rxjs";
import { Commande } from "../models/commande.model";

@Injectable({
    providedIn: 'root'
})
export class Command{
    private items$ = new BehaviorSubject<Commande[]>([
   
     
    ]);

    //fonction qui permet de recevoir le produit bdans le panier
    getCommande(){
        return  this.items$.asObservable();
    }

    //fonction qui permet d'ajouter un produit dans le panier
    addInfos( newItem: Commande){
        this.items$.next([...this.items$.getValue(), newItem]);
    }

 
  
}