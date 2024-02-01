


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
user = {} as User
  name: string = "";
  email: string = "";
  password: string = "";
 
  toastCtrl: any;


  constructor(public navCntrl: NavController, private auth: Auth, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  async register(user: User){
    
    if (this.formValidation()){
      //show loader
      let loader = this.loadingCtrl.create({
        message: "veuillez attendre svp ..."
    });
      (await loader).present();

      try{
        

        //redirection
        this.navCntrl.navigateRoot('home');

      } catch (e) {
        const errorMessage = typeof e === 'string' ? e : 'Une erreur s\'est produite'; // Utilisez typeof pour vérifier le type
        this.showToast(errorMessage);
      }
      finally{
         //dismiss loader
      (await loader).dismiss();
      }

     
    }
    
  }


  async signup() {
    const user = await createUserWithEmailAndPassword(
      this.auth,
      this.email,
      this.password
    );
    return user;
  }

 

  gotoLogin() {
    this.navCntrl.navigateBack('login');
  }

  formValidation(){
    if(!this.user.email){
      this.showToast("Enter une adresse email svp");
      return false;
    }
    if(!this.user.password){
      this.showToast("Entrer un Mot de passe svp");
      return false;
    }
    return true;
  }

  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then((toastData: { present: () => any; }) => toastData.present());
  }

}
