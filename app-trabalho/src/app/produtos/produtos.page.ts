import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  public pathImgs   = '../../assets/img/';

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

  ngOnInit() {
  }

}
