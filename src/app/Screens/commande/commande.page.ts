import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  public textToCode!: string;
  public myAngularxQrCode: string | null = null;



  createQRcode(){
    this.myAngularxQrCode= this.textToCode;
    this.textToCode="";
  }

  constructor(
   
    ) { }
  

  ngOnInit() {
   

   

}
}
