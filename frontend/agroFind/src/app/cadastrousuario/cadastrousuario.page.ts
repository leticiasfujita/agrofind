import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserResponse } from './usuario-model';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.page.html',
  styleUrls: ['./cadastrousuario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonicModule, HttpClientModule]
})
export class CadastrousuarioPage implements OnInit {
 
  userBody!:UserResponse;

  formularioUsuario: FormGroup = new FormGroup({
    nomeCompleto: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dataNascimento: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    contato: new FormControl('', [Validators.required]),
    senha: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() { }

  onSubmit() {
    if (this.formularioUsuario.valid) {
      console.log('Formulário válido, enviando dados', this.formularioUsuario.value);

      this.userBody = {
        name: this.formularioUsuario.get('nomeCompleto')!.value,
        email: this.formularioUsuario.get('email')!.value,
        password: this.formularioUsuario.get('senha')!.value,
      }
      this.postNewUser(this.userBody).subscribe(response =>{console.log(response)});
      this.router.navigateByUrl('/home');
    } else {
      console.log('Formulário inválido, verifique os campos.');
    }
  }

  postNewUser(body:UserResponse):Observable<UserResponse>{
    let headers = new HttpHeaders();
    return this.http.post<UserResponse>('http://localhost:3000/',body,{headers,})
  }
}
