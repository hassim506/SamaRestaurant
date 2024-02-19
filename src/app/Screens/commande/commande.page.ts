import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Food } from 'src/app/models/food.model';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Commande } from 'src/app/models/commande.model';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  public textToCode!: string;
  public myAngularxQrCode: string | null = null;

//double fonction qui permet d'afficher le camera
  public showCamera = false;
public textScanned: string = '';


Infos: Commande = {} as Commande;
  Command: any;
 


  constructor(
    private toasCtrl: ToastController,
    private qrScanner: QRScanner,
    public alertController: AlertController,
    private alertCtrl: AlertController, 
    private modalCtrl: ModalController,
    private router: Router

     
      ) {
        this.scancode();
       }
    
  
    ngOnInit() {
     
  
     
  
  }
  //fonction pour fermer le camera
  closeCamera() {
    this.showCamera = false;
    this.qrScanner.hide(); // hide camera preview
    this.qrScanner.destroy();
  }
  
  //fonction pour creer un QRcode
  createQRcode(){
    this.myAngularxQrCode= this.textToCode;
    this.textToCode="";
  }
  
  scanCode() {
    this.showCamera = true;
    // Optionally request the permission early
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // On commence le scan
        console.log('Scan en cours...' + JSON.stringify(status));
        const scanSub = this.qrScanner.scan().subscribe((text: any) => {
          console.log('Scanned something', text.result);
          this.textScanned = text.result;
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
          this.showCamera = false;
        });
      } else if (status.denied) {
        // camera permission was permanently denied
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    })
    .catch((e: any) => console.log('Error is', e));
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

  getInfos(){
    const Infos: Commande ={
      Nom: this.Infos.Nom,
      Prenom: this.Infos.Prenom,
      Adresse: this.Infos.Adresse,
      Telephone: this.Infos.Telephone,
     
    }

    this.Command. addInfos(Infos);
    this.presentToast();
  }

  async presentToast(){
    const toast = await  this.toasCtrl.create({
      message:'Votre commande a été Validé avec succées',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }
  async Chekout() {
    try {
      let alert = await this.alertCtrl.create({
        header: 'Merci pour votre commande',
        message: 'Votre commande a été validée avec succès',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.modalCtrl.dismiss();
              this.router.navigate(['/home']); // chemin de redirection vers la page d'accueil aprés la validation de commande
            }
          }
        ]
      });

      alert.present();
    } catch (error) {
      console.error('Erreur dans la fonction Chekout :', error);
    }
  }
}
