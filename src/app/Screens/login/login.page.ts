import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {


  email: string = "";
  password: string = "";

  constructor(public navCntrl: NavController, private auth: Auth) {}
//connexion
  async login() {
    try{
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );
      //recuperation de l'utilisateur 
      const user = userCredential.user;
      //rediriger vers la page d'accueill
      this.navCntrl.navigateRoot('/home/listing');
      //aficher le user
      console.log(user.uid);
      return user;
    }
    catch(error){
      //en cas d'erreur
      console.error('erreur lors de la connexion:', error);
      return null;
    }
    
   
   
  }


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


  gotoSignup() {
    this.navCntrl.navigateForward('signup');
  }
  
}