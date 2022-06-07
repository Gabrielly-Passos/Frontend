import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

public nomeProduto: string = "Curso de Angular";
anuncio: string = `O ${this.nomeProduto} está em promoção!`;
idProduto: number = 3;
precoProduto: number = 2.59;
promocao: boolean = true;
foto:string = 'assets/img/crud.png';
dataValidade = '2021-12-31'

listaProdutos: any[]=[

  {nome: 'Curso Python', precoProduto: 500.00, validade: '2023-10-10', id:1, promocao: true},
  {nome: 'Curso C#', precoProduto: 520.10, validade: '2022-12-10', id:2},
  {nome: 'Curso JavaScript', precoProduto: 450.99, validade: '2023-02-03', id:3},
  {nome: 'Curso TypeScript', precoProduto: 670.01, validade: '2024-01-01', id:4, promocao: true},
  {nome: 'Curso Go', precoProduto: 150.60, validade: '2022-12-25', id:5}
  
];




  constructor() {

    //Variaveis de string com concatenação.
    //this.anuncio = `O` + this.nomeProduto + ` está em promoção`;

    console.log(`Nome do produto:`, this.nomeProduto);
    console.log(`Anuncio:`, this.anuncio);
    console.log(`ID:`, this.idProduto);
    console.log(`Preço:`, this.precoProduto);
    console.log(`Promoção:`, this.promocao);



  }

  ngOnInit(): void {
  }

}
