import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastroanuncio',
  templateUrl: './cadastroanuncio.page.html',
  styleUrls: ['./cadastroanuncio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CadastroanuncioPage  {
    formulario = [
        { 
          campo: 'nomeCompleto', 
          control: new FormControl('', Validators.required), 
          mensagemErro: 'Nome completo é obrigatório.' 
        },
        { 
          campo: 'areaAtuacao', 
          control: new FormControl('', Validators.required), 
          mensagemErro: 'Área de Atuação é obrigatória.' 
        },
        { 
          campo: 'descricaoAtividades', 
          control: new FormControl('', Validators.required), 
          mensagemErro: 'Descrição das atividades é obrigatória.' 
        },
        { 
          campo: 'tempoExperiencia', 
          control: new FormControl(''), 
        },
        { 
          campo: 'endereco', 
          control: new FormControl('', Validators.required), 
          mensagemErro: 'Endereço é obrigatório.' 
        },
        { 
          campo: 'cidade', 
          control: new FormControl('', Validators.required), 
          mensagemErro: 'Cidade é obrigatória.' 
        },
        { 
          campo: 'contato', 
          control: new FormControl('', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]), 
          mensagemErro: 'Contato é obrigatório. Use o formato (XX) XXXXX-XXXX.' 
        },
        { 
          campo: 'infoAdicionais', 
          control: new FormControl(''),
        }
    
      ];
    
      constructor() { }
    
      submitForm() {

        for (let i = 0; i < this.formulario.length; i++) {
          if (this.formulario[i].control.invalid) {
            alert(this.formulario[i].mensagemErro);
            return;
          }
        }
    
        console.log("Formulário enviado!");
      }
    
    }