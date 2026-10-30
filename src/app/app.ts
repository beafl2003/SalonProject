import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
@Component({
  imports: [RouterOutlet, Cabecalho, Inicio,  RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('SalonProject');
}
