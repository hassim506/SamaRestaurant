import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  //decconection
  async logout(){
    //verification
    try{
      //deco
      if (this.auth.currentUser){
        await this.auth.signOut();
        console.log('Utilisateur deconnecté avec succées');
      }
      else{
        console.log('aucun utilisateur connecté');
      }
    }
    catch(error){
      //gestion de l'erreur
      console.error('Erreur lors de la déconnection:', error);

    }
  }
  constructor(private auth: Auth, public navCntrl: NavController,) {}
}
