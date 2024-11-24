import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnouncementResponse } from '../cadastrousuario/usuario-model';

@Component({
  selector: 'app-cadastroanuncio',
  templateUrl: './cadastroanuncio.page.html',
  styleUrls: ['./cadastroanuncio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonicModule, HttpClientModule]
})
export class CadastroanuncioPage implements OnInit {

  userBody!:AnouncementResponse;

  formularioAnuncio: FormGroup = new FormGroup({
    nomeCompleto: new FormControl('', Validators.required),
    areaAtuacao: new FormControl('', Validators.required),
    descricaoAtividades: new FormControl('', Validators.required),
    tempoExperiencia: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    contato: new FormControl('', Validators.required),
    infoAdicionais: new FormControl('', Validators.required)
  });
    
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() { }

  onSubmit() {
    if (this.formularioAnuncio.valid) {
      console.log('Formulário válido, enviando dados', this.formularioAnuncio.value);
  
      this.userBody = {
        name: this.formularioAnuncio.get('nomeCompleto')!.value,
        occupationArea: this.formularioAnuncio.get('areaAtuacao')!.value,
        description: this.formularioAnuncio.get('descricaoAtividades')!.value,
        timeExperience: this.formularioAnuncio.get('tempoExperiencia')!.value,
        adress: this.formularioAnuncio.get('endereco')!.value,
        city: this.formularioAnuncio.get('cidade')!.value,
        contact: this.formularioAnuncio.get('contato')!.value,
        idUser: '6677bc2020cdc73c8b989ed7',
        imageUrl: 'assets/icon/img/user1.png'
      }
      this.postNewUser(this.userBody).subscribe(response =>{console.log(response)});
      this.router.navigateByUrl('/telaprincipal');
      } else {
        console.log('Formulário inválido, verifique os campos.');
      }
    }

    cancelar(): void {
      this.router.navigateByUrl('/telaprincipal'); 
    }
    
  
  postNewUser(body:AnouncementResponse):Observable<AnouncementResponse>{
    let headers = new HttpHeaders();
    return this.http.post<AnouncementResponse>('https://agrofindbackrender.onrender.com/advertisiment',body,{headers,})
  }
}