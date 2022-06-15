import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/services/Model/IProduto.model';


@Component({
  selector: 'app-listarprodutos',
  templateUrl: './listarprodutos.component.html',
  styleUrls: ['./listarprodutos.component.css']
})
export class ListarprodutosComponent implements OnInit {

  listarProdutos: IProduto[] = [];



  constructor(private produtoService: ProdutosService) {

   }

  ngOnInit(): void {
    this.carregarProdutos();
  }
  carregarProdutos(): void{
    this.produtoService.buscarTodos().subscribe(retorno =>{
      this.listarProdutos = retorno;
    })

  }
}
