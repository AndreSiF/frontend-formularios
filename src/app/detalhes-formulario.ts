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
  template: `
    <div *ngIf="formulario; else loading">
      <h2>Detalhes do Formulário</h2>

        <h3>Informações da Pessoa</h3>
        <p><strong>Nome:</strong> {{ formulario.pessoa?.nome }}</p>
        <p><strong>CPF:</strong> {{ formulario.pessoa?.cpf }}</p>
        <p><strong>Telefone:</strong> {{ formulario.pessoa?.telefone }}</p>
        <p><strong>Email:</strong> {{ formulario.pessoa?.email }}</p>
        <p><strong>Endereço:</strong> {{ formulario.pessoa?.endereco }}</p>
        <p><strong>UF:</strong> {{ formulario.pessoa?.uf }}</p>
        <p><strong>Município:</strong> {{ formulario.pessoa?.municipio }}</p>
        <p><strong>RGP:</strong> {{ formulario.pessoa?.rgp }}</p>
        <p><strong>Razão Social:</strong> {{ formulario.pessoa?.razaoSocial }}</p>
        <p><strong>CNPJ:</strong> {{ formulario.pessoa?.cnpj }}</p>
        <p><strong>CNAE:</strong> {{ formulario.pessoa?.cnae }}</p>
        <p><strong>Responsável Legal:</strong> {{ formulario.pessoa?.responsavelLegal }}</p>
        <p><strong>CPF do Responsável Legal:</strong> {{ formulario.pessoa?.cpfResponsavelLegal }}</p>
        <p><strong>RGP do Responsável Legal:</strong> {{ formulario.pessoa?.rgpResponsavelLegal }}</p>
        <p><strong>Telefone do Responsável Legal:</strong> {{ formulario.pessoa?.telefoneResponsavelLegal }}</p>
        <p><strong>Email do Responsável Legal:</strong> {{ formulario.pessoa?.emailResponsavelLegal }}</p>

        <h3>Empreendimento</h3>
        <p><strong>Endereço:</strong> {{ formulario.enderecoEmpreendimento }}</p>
        <p><strong>UF:</strong> {{ formulario.ufEmpreendimento }}</p>
        <p><strong>Município:</strong> {{ formulario.municipioEmpreendimento }}</p>
        <p><strong>Latitude:</strong> {{ formulario.latitude }}</p>
        <p><strong>Longitude:</strong> {{ formulario.longitude }}</p>

        <h3>Informações Técnicas</h3>
        <p><strong>Possui Responsável Técnico:</strong> {{ formulario.hasResponsavelTecnico }}</p>
        <p><strong>Nome do Responsável Técnico:</strong> {{ formulario.nomeResponsavelTecnico }}</p>
        <p><strong>Registro do Responsável Técnico:</strong> {{ formulario.registroResponsavelTecnico }}</p>
        <p><strong>Telefone do Responsável Técnico:</strong> {{ formulario.telefoneResponsavelTecnico }}</p>
        <p><strong>Email do Responsável Técnico:</strong> {{ formulario.emailResponsavelTecnico }}</p>
        <p><strong>Possui DAP:</strong> {{ formulario.hasDap }}</p>
        <p><strong>DAP:</strong> {{ formulario.dap }}</p>
        <p><strong>Possui Licença Ambiental:</strong> {{ formulario.hasLicencaAmbiental }}</p>
        <p><strong>Licença Ambiental:</strong> {{ formulario.licencaAmbiental }}</p>
        <p><strong>Possui Outorga:</strong> {{ formulario.hasOutorga }}</p>
        <p><strong>Outorga:</strong> {{ formulario.outorga }}</p>
        <p><strong>Possui CTF:</strong> {{ formulario.hasCtf }}</p>
        <p><strong>CTF:</strong> {{ formulario.ctf }}</p>
        <p><strong>Possui CAR:</strong> {{ formulario.hasCar }}</p>
        <p><strong>CAR:</strong> {{ formulario.car }}</p>
        <p><strong>Possui OESA:</strong> {{ formulario.hasOesa }}</p>
        <p><strong>OESA:</strong> {{ formulario.oesa }}</p>
        <p><strong>Possui Assistência Técnica:</strong> {{ formulario.hasAssistenciaTecnica }}</p>
        <p><strong>Atendimentos por Ano:</strong> {{ formulario.atendimentosAno }}</p>
        <p><strong>Possui Viveiro:</strong> {{ formulario.hasViveiro }}</p>
        <p><strong>Tipo de Viveiro:</strong> {{ formulario.tipoViveiro }}</p>
        <p><strong>Área do Viveiro:</strong> {{ formulario.areaViveiro }}</p>
        <p><strong>Possui Tanque Rede:</strong> {{ formulario.hasTanqueRede }}</p>
        <p><strong>Área do Tanque Rede:</strong> {{ formulario.areaTanqueRede }}</p>
        <p><strong>Possui Sistema Fechado:</strong> {{ formulario.hasSistemaFechado }}</p>
        <p><strong>Tipo de Sistema Fechado:</strong> {{ formulario.tipoSistemaFechado }}</p>
        <p><strong>Área do Sistema Fechado:</strong> {{ formulario.areaSistemaFechado }}</p>
        <p><strong>Possui Raceway:</strong> {{ formulario.hasRaceway }}</p>
        <p><strong>Área do Raceway:</strong> {{ formulario.areaRaceway }}</p>

        <h3>Produções</h3>
        <div *ngFor="let producao of formulario.producoes">
        <p><strong>Espécie:</strong> {{ producao.especie }}</p>
        <p><strong>Produção (Kg):</strong> {{ producao.producaoKg }}</p>
        <p><strong>Unidades:</strong> {{ producao.unidades }}</p>
        </div>

        <h3>Formas Jovens</h3>
        <p><strong>Área de Formas Jovens:</strong> {{ formulario.areaFormaJovem }}</p>
        <div *ngFor="let formaJovem of formulario.formasJovem">
        <p><strong>Espécie:</strong> {{ formaJovem.especie }}</p>
        <p><strong>Milheiros:</strong> {{ formaJovem.milheiros }}</p>
        </div>

        <h3>Produções Ornamentais</h3>
        <div *ngFor="let producaoOrnamental of formulario.producoesOrnamental">
        <p><strong>Espécie:</strong> {{ producaoOrnamental.especie }}</p>
        <p><strong>Produção (Kg):</strong> {{ producaoOrnamental.producaoKg }}</p>
        <p><strong>Unidades:</strong> {{ producaoOrnamental.unidades }}</p>
        </div>

        <h3>Aquisições de Formas Jovens</h3>
        <div *ngFor="let aquisicaoFormaJovem of formulario.aquisicoesFormaJovem">
        <p><strong>UF de Origem:</strong> {{ aquisicaoFormaJovem.ufOrigem }}</p>
        <p><strong>Espécie:</strong> {{ aquisicaoFormaJovem.especie }}</p>
        <p><strong>Milheiros:</strong> {{ aquisicaoFormaJovem.milheiros }}</p>
        </div>

        <h3>Aquisições de Ração</h3>
        <div *ngFor="let aquisicaoRacao of formulario.aquisicoesRacao">
        <p><strong>UF de Origem:</strong> {{ aquisicaoRacao.ufOrigem }}</p>
        <p><strong>Unidade:</strong> {{ aquisicaoRacao.unidade }}</p>
        <p><strong>Quantidade:</strong> {{ aquisicaoRacao.quantidade }}</p>
        </div>

        <h3>Comercialização de Espécies</h3>
        <div *ngFor="let comercializacaoEspecie of formulario.comercializacaoEspecie">
        <p><strong>UF de Origem:</strong> {{ comercializacaoEspecie.ufOrigem }}</p>
        <p><strong>Espécie:</strong> {{ comercializacaoEspecie.especie }}</p>
        <p><strong>Produção (Kg):</strong> {{ comercializacaoEspecie.producaoKg }}</p>
        <p><strong>Quantidade:</strong> {{ comercializacaoEspecie.quantidade }}</p>
        <p><strong>Preço Médio:</strong> {{ comercializacaoEspecie.precoMedio }}</p>
        </div>

        <h3>Produções Ornamentais</h3>
        <div *ngFor="let producaoOrnamental of formulario.producoesOrnamentais">
        <p><strong>UF de Origem:</strong> {{ producaoOrnamental.ufOrigem }}</p>
        <p><strong>Unidades:</strong> {{ producaoOrnamental.unidades }}</p>
        <p><strong>Quantidade:</strong> {{ producaoOrnamental.quantidade }}</p>
        </div>

    </div>

    <ng-template #loading>
      <p>Carregando detalhes...</p>
    </ng-template>
    
    <ng-template #error>
      <p>Erro ao carregar os detalhes do formulário. Tente novamente mais tarde.</p>
    </ng-template>
  `
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
