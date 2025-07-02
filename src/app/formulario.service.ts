import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';

export const formularios = signal<any[]>([]);

export function carregarFormularios() {
  const http = inject(HttpClient);
  http.get<any[]>('http://localhost:8080/api/formularios').subscribe(data => {
    formularios.set(data);
  });
}
