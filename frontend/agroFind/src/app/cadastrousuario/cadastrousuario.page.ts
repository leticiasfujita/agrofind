import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.page.html',
  styleUrls: ['./cadastrousuario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonicModule]
})
export class CadastrousuarioPage implements OnInit {
 
  formularioUsuario: FormGroup = new FormGroup({
    nomeCompleto: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dataNascimento: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    contato: new FormControl('', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]),
    userLogin: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    console.log('onSubmit chamado');
    if (this.formularioUsuario.valid) {
      console.log('Formulário válido, enviando dados', this.formularioUsuario.value);
      this.router.navigateByUrl('/home');
    } else {
      console.log('Formulário inválido, verifique os campos.');
    }
  }
}
