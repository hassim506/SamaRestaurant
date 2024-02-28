
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { User } from 'src/app/models/Users.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name: string = "";
  email: string = "";
  password: string = "";
 
  toastCtrl: any;


  constructor(public navCntrl: NavController, private auth: Auth, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  


  async signup() {
    try{
      await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );
      this.gotoLogin();
    }
    catch(error){
      console.error("Erreur lors de l'inscription:", error);
    }
    
   
  }

 

  gotoLogin() {
    this.navCntrl.navigateBack('login');
  }
}
