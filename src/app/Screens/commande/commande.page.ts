import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Food } from 'src/app/models/food.model';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  public textToCode!: string;
  public myAngularxQrCode: string | null = null;


  constructor(
   
    private qrScanner: QRScanner,
    public alertController: AlertController
     
      ) {
        this.scancode();
       }
    
  
    ngOnInit() {
     
  
     
  
  }
  createQRcode(){
    this.myAngularxQrCode= this.textToCode;
    this.textToCode="";
  }
  scancode() {
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
       if (status.authorized) {
         // ici on va verifier si on a bien accés à la caméra si tel est le cas
  
         // on appelle cette fonction pour démarrer la caméra
         let scanSub = this.qrScanner.scan().subscribe((text: string) => {
           console.log('Scanned something', text);
  
           this.qrScanner.hide(); // on masque la camera
           scanSub.unsubscribe(); // stop le scan
         });
  
       } else if (status.denied) {
         // camera permission was permanently denied
         // you must use QRScanner.openSettings() method to guide the user to the settings page
         // then they can grant the permission from there
       } else {
         // permission was denied, but not permanently. You can ask for permission again at a later time.
       }
    })
    .catch((e: any) => console.log('Error is', e));
  }

  
}
