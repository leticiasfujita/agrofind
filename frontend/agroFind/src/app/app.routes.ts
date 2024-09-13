import { Routes } from '@angular/router';
import { CadastrousuarioPage } from './cadastrousuario/cadastrousuario.page';
import { HomePage } from './home/home.page';
import { CadastroanuncioPage } from './cadastroanuncio/cadastroanuncio.page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cadastrousuario', component: CadastrousuarioPage },
  { path: 'home', component: HomePage },
  { path: 'cadastroanuncio', component: CadastroanuncioPage },
  {
    path: 'telaprincipal',
    loadComponent: () => import('./telaprincipal/telaprincipal.page').then( m => m.TelaprincipalPage)
  },
  {
    path: 'anunciocadastrado',
    loadComponent: () => import('./anunciocadastrado/anunciocadastrado.page').then( m => m.AnunciocadastradoPage)
  },
];

