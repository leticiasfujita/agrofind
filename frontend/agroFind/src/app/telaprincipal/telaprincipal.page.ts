import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-telaprincipal',
  templateUrl: './telaprincipal.page.html',
  styleUrls: ['./telaprincipal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TelaprincipalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
