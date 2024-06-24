import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AnouncementResponse } from '../cadastrousuario/usuario-model';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-anunciocadastrado',
  templateUrl: './anunciocadastrado.page.html',
  styleUrls: ['./anunciocadastrado.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HttpClientModule]
})
export class AnunciocadastradoPage implements OnInit {

  advertisement!:AnouncementResponse[];
  userBody!:AnouncementResponse;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {

    this.userBody = {
      name: '',
      occupationArea: '',
      description: '',
      timeExperience: '',
      adress: '',
      city: '',
      contact: '',
      idUser: '6677bc2020cdc73c8b989ed7',
      imageUrl: ''
    }
    
    this.getAllAdvertising(this.userBody).subscribe(response =>{    
      this.advertisement = response;
    });
  }

  getAllAdvertising(body:AnouncementResponse):Observable<AnouncementResponse[]>{
    let headers = new HttpHeaders();
    return this.http.post<AnouncementResponse[]>('http://localhost:3000/myadvertisiment',body,{headers,})
  }

}
