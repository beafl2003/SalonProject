import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports:  [RouterLink, RouterLinkActive],
  selector: 'app-cabecalho',
  styleUrl: './cabecalho.css',
  templateUrl: './cabecalho.html',
})
export class Cabecalho {
  links = [
    { rota: '/', texto: 'Início' },
    { rota: '/salao', texto: 'Salão' },
    { rota: '/servicos', texto: 'Serviços' },
    { rota: '/contato', texto: 'Contato' },
  ];

  redes = [
    { nome: 'Instagram', url: 'https://www.instagram.com/alan_vivian/', icone: 'fa-instagram' },
    { nome: 'Facebook', url: 'https://www.facebook.com/cabeleireirocalvo/', icone: 'fa-facebook' },
    { nome: 'X', url: 'https://x.com/alanvivianAV', icone: 'fa-x-twitter' },
    { nome: 'YouTube', url: 'https://www.youtube.com/@Cabeleireirocalvo', icone: 'fa-youtube' },
    { nome: 'TikTok', url: 'https://www.tiktok.com/@cabeleireirocalvo', icone: 'fa-tiktok' },
  ];
}