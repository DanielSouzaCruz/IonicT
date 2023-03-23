import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pathImgs = '../../assets/img/';

  public categorias = [
    { codigo: 1, nome: 'Pizzas'    },
    { codigo: 2, nome: 'Burguers'  },
    { codigo: 3, nome: 'Assados'   },
    { codigo: 4, nome: 'Cachorrão' }
  ]
  
  public produtos = [
    {codigo : 1, categoria : 1, valor : 10.00, descricao : 'lorem ipsum', nome: 'Pizza de Queijo', imagens : ['pqueijo_resized.jpg'], visibled : false},
    {codigo : 2, categoria : 1, valor : 15.00, descricao : 'lorem ipsum', nome: 'Pizza de Presunto', imagens : ['ppresunto_resized.jpeg'], visibled : false},
    {codigo : 3, categoria : 1, valor : 20.00, descricao : 'lorem ipsum', nome: 'Pizza de Chocolate', imagens : ['pchocolate_resized.jpg'], visibled : false},
    {codigo: 4, categoria : 2, valor : 12.00, descricao : 'lorem ipsum', nome: 'Hamburguer de Frango', imagens : ['hfrango_resized.jpg'], visibled : false},
    {codigo: 5, categoria : 2, valor : 21.00, descricao : 'lorem ipsum', nome: 'Hamburguer de Costela', imagens : ['hcostela_resized.jpg'], visibled : false},
    {codigo: 6, categoria : 2, valor : 15.00, descricao : 'lorem ipsum', nome: 'Hamburguer de Caseiro', imagens : ['hcaseiro_resized.jpg'], visibled : false},
    {codigo: 7, categoria : 3, valor : 3.00, descricao : 'lorem ipsum', nome: 'Coxinha de Carne Seca', imagens: ['cseca_resized.jpg'], visibled : false},
    {codigo: 8, categoria : 3, valor : 4.50, descricao : 'lorem ipsum', nome: 'Croissant de Chocolate', imagens: ['crochocolate_resized.jpg'], visibled : false},
    {codigo: 9, categoria : 3, valor : 10.00, descricao : 'lorem ipsum', nome: 'Bauru', imagens : ['bauro_resized.jpg'], visibled : false},
    {codigo: 10, categoria : 4, valor : 12.00, descricao : 'lorem ipsum', nome: 'Cachorro Quente de Cenoura', imagens : ['cenoura_resized.jpg'], visibled : false},
    {codigo: 11, categoria : 4, valor : 19.00, descricao : 'lorem ipsum', nome: 'Cachorro Quente Completo', imagens : ['completo_resized.jpg'], visibled : false},
    {codigo: 12, categoria : 4, valor : 25.00, descricao : 'lorem ipsum', nome: 'Cachorro Quente Duplo', imagens : ['duplo_resized.jpg'], visibled : false}
  ]

  public selecaodecardapio : any;

  constructor(private navCtrl: NavController) {
    this.irselecao(1);
  }


  public irselecao(codigoCategoria:any) {
    this.selecaodecardapio = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selecaodecardapio)
    .map(el => el.visibled = true);
  }

  public irnoproduto(produto:any) {
    this.navCtrl.navigateForward('produtos', {
      queryParams: { produto: produto }
    });
  }

}
