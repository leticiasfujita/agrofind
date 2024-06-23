import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginResponse } from '../cadastrousuario/usuario-model';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,CommonModule, FormsModule, IonicModule,ReactiveFormsModule ,HttpClientModule],
})
export class HomePage {

  userBody!:LoginResponse;

  formularioLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private http: HttpClient) {}

  entrarLogin() {
    this.userBody = {
      email: this.formularioLogin.get('email')!.value,
      password: this.formularioLogin.get('senha')!.value,
    }

    this.login(this.userBody).subscribe(response =>{
      if(response){
        this.router.navigateByUrl('/telaprincipal');
      }else {
        console.log("erro");
      }
    });
    console.log('Entrar button clicked');
  }

  login(body:LoginResponse):Observable<LoginResponse>{
    let headers = new HttpHeaders();
    return this.http.post<LoginResponse>('http://localhost:3000/login',body,{headers,})
  }

  cadastrar() {
    console.log('Cadastrar button clicked');
  }

}
