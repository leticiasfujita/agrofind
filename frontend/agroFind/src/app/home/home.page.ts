import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,CommonModule, IonicModule],
})
export class HomePage {
  constructor() {}
  entrarLogin() {
    console.log('Entrar button clicked');
  }

  cadastrar() {
    console.log('Cadastrar button clicked');
  }

}
