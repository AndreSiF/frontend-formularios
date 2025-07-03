import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import {NgFor} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-detalhes-formulario',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './detalhes-formulario.html' 
    
})
export class DetalhesFormulario implements OnInit {
  route = inject(ActivatedRoute);
  http = inject(HttpClient);
  formulario: any = null;
  error: boolean = false;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.http.get<any>(`http://localhost:8080/api/formularios/${id}`)
      .pipe(
        catchError(err => {
          this.error = true;
          return of(null); // Retorna null em caso de erro
        })
      )
      .subscribe(data => {
        this.formulario = data;
        if (!data) {
          this.error = true; // Se não houver dados, também marca como erro
        }
      });
  }
}
