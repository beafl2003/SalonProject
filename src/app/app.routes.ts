import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Salao } from './paginas/salao/salao';
import { Servicos } from './paginas/servicos/servicos';
import { Contato } from './paginas/contato/contato';
import { Notfound } from './paginas/notfound/notfound';

export const routes: Routes = [ 
 { path: '', component: Inicio, title:'Início' },
    { path: 'salao', component: Salao, title:'O Salão' },
    { path: 'servicos', component: Servicos, title:'Serviços' },
    { path: 'contato', component: Contato, title:'Contato' },
    { path: '**', component: Notfound, title:'Página Não Encontrada' }
];