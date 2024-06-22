import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-anunciocadastrado',
  templateUrl: './anunciocadastrado.page.html',
  styleUrls: ['./anunciocadastrado.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AnunciocadastradoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
