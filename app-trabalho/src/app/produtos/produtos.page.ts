import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  public pathImgs   = '../../assets/img/';
  public pedidoquantidade = 0;
  
  
  public produto = {
    codigo      : 0, 
    categoria   : 0, 
    valor       : 0.00,
    descricao   : '', 
    nome        : '',
    imagens     : [], 
    visibled    : false
  }
  
  

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.produto = params['produto'];
    });
  }

  public acrescentaQuantidade(){
    this.pedidoquantidade += 1
  }

  public diminuiQuantidade(){
    if(this.pedidoquantidade > 0){
      this.pedidoquantidade -= 1
    }
  }

  public valorMuitoReal = 0;

  public atualizacaoPreco(){
    this.valorMuitoReal= this.produto.valor * this.pedidoquantidade
  }
  ngOnInit() {
  }

}
