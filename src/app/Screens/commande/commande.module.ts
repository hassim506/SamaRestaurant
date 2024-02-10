import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandePageRoutingModule } from './commande-routing.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { CommandePage } from './commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandePageRoutingModule,
    ButtonModule,
  ],
  declarations: [CommandePage]
})
export class CommandePageModule {}
