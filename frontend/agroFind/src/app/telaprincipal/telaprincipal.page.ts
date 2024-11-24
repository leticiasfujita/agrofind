import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AnouncementResponse } from '../cadastrousuario/usuario-model';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-telaprincipal',
  templateUrl: './telaprincipal.page.html',
  styleUrls: ['./telaprincipal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HttpClientModule]
})
export class TelaprincipalPage implements OnInit {

  advertisement!:AnouncementResponse[];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getAllAdvertising().subscribe(response =>{    
      this.advertisement = response;
    });
  }

  getAllAdvertising():Observable<AnouncementResponse[]>{
    let headers = new HttpHeaders();
    return this.http.get<AnouncementResponse[]>('https://agrofindbackrender.onrender.com/advertisiment',{headers,})
  }

  btCadastrarAnuncio(){
    this.router.navigateByUrl('/cadastroanuncio');
  }

  btMeusAnuncios(){
    this.router.navigateByUrl('/anunciocadastrado');
  }

}
