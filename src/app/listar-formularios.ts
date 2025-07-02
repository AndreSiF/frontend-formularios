import { Component, computed, inject, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';

@Component({
  selector: 'lista-formularios',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './lista-formularios.html'
})
export class ListaFormulariosComponent implements OnInit {
  private http = inject(HttpClient);
  private dados = signal<any[]>([]);
  formularios = computed(() => this.dados());

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/formularios')
      .subscribe(data => this.dados.set(data));
  }
}
