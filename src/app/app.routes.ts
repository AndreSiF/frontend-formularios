import { Routes } from '@angular/router';
import { App } from './app';
import { ListaFormulariosComponent } from './listar-formularios';
import { DetalhesFormulario } from './detalhes-formulario';

export const routes: Routes = [
  { path: '', component: ListaFormulariosComponent },
  { path: 'detalhes/:id', component: DetalhesFormulario }
];
