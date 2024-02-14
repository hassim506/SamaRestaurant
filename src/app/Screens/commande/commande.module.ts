import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';
import { QRCodeErrorCorrectionLevel } from 'angularx-qrcode';

import { CommandePageRoutingModule } from './commande-routing.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { CommandePage } from './commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    CommandePageRoutingModule,
    ButtonModule,
  ],
  declarations: [CommandePage]
})
export class CommandePageModule {}
