import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Iproduto } from 'src/app/services/Model/IProduto.model';


@Component({
  selector: 'app-listarprodutos',
  templateUrl: './listarprodutos.component.html',
  styleUrls: ['./listarprodutos.component.css']
})
export class ListarprodutosComponent implements OnInit {

  listarProdutos: Iproduto[] = []


  constructor(private produtoService: ProdutosService) {

   }

  ngOnInit(): void {
  }
  carregarProdutos(): void{

  }
}
