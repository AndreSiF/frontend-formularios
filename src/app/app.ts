import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { formularios, carregarFormularios } from './formulario.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  formularios = formularios;

  constructor() {
    carregarFormularios();
  }
}
