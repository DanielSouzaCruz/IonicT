import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categorias = [
    { codigo: 1, nome: 'Pizzas'    },
    { codigo: 2, nome: 'Burguers'  },
    { codigo: 3, nome: 'Assados'   },
    { codigo: 4, nome: 'Cachorrão' }
  ]
  
  public produtos = [
    {codigo : 1, categoria : 1, valor : 10.00, descricao : 'lorem ipsum', nome: 'pizza de queijo', imagens : 'https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-pizza-caseira-dois-queijos.jpg', visibled : false},
    {codigo : 2, categoria : 1, valor : 15.00, descricao : 'lorem ipsum', nome: 'pizza de presunto', imagens : 'https://www.masterpizzadf.com.br/uploads/d070b-pizza-sabor-brasileira-da-pizza-hut.jpeg', visibled : false},
    {codigo : 3, categoria : 1, valor : 20.00, descricao : 'lorem ipsum', nome: 'pizza de chocolate', imagens : 'https://img.itdg.com.br/tdg/images/recipes/000/055/212/131483/131483_original.jpg?w=1200', visibled : false},
    {codigo: 4, categoria : 2, valor : 12.00, descricao : 'lorem ipsum', nome: 'hamburguer de frango', imagens : 'https://www.minervafoods.com/wp-content/uploads/2022/12/hamburguer_de_frango_-_blog-3.jpg', visibled : false},
    {codigo: 5, categoria : 2, valor : 21.00, descricao : 'lorem ipsum', nome: 'hamburguer de costela', imagens : 'https://ogimg.infoglobo.com.br/in/22318020-42b-a9d/FT1086A/HOB_Costela-BBQ_Credito-Ezio-Philot-e-Vinicius-Oliveira-1.jpg', visibled : false},
    {codigo: 6, categoria : 2, valor : 15.00, descricao : 'lorem ipsum', nome: 'hamburguer de caseiro', imagens : 'https://assets.unileversolutions.com/recipes-v2/230447.jpg', visibled : false},
    {codigo: 7, categoria : 3, valor : 3.00, descricao : 'lorem ipsum', nome: 'coxinha de carne seca', imagens: 'https://www.receitasagora.com.br/wp-content/uploads/2020/09/receita-de-coxinha-de-mandioca-com-carne-seca.jpg', visibled : false},
    {codigo: 8, categoria : 3, valor : 4.50, descricao : 'lorem ipsum', nome: 'croissant de chocolate', imagens: 'https://www.receitas-sem-fronteiras.com/media/253165-jpg_crop.jpeg/rh/croissant-de-chocolate.jpg', visibled : false},
    {codigo: 9, categoria : 3, valor : 10.00, descricao : 'lorem ipsum', nome: 'bauru', imagens : 'https://uploads.metropoles.com/wp-content/uploads/2022/02/04175407/Bauru-1_Easy-Resize.com-1-1024x682.jpg', visibled : false},
    {codigo: 10, categoria : 4, valor : 12.00, descricao : 'lorem ipsum', nome: 'cachorro quente de cenoura', imagens : 'https://www.acasaencantada.com.br/wp-content/uploads/2016/03/cachorro-quente2-1.jpg', visibled : false},
    {codigo: 11, categoria : 4, valor : 19.00, descricao : 'lorem ipsum', nome: 'cachorro quente completo', imagens : 'https://s2.glbimg.com/nmq9RQ0XDZ9ztJsfdFB0_6Ceeqs=/0x0:629x412/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/10/02/13_14_48_860_cachorro.jpg', visibled : false},
    {codigo: 11, categoria : 4, valor : 25.00, descricao : 'lorem ipsum', nome: 'cachorro quente duplo', imagens : 'https://meucachorroquente.com.br/wp-content/uploads/2021/03/cachorro-quente-prensado-para-vender.jpg', visibled : false}
  ]

  public selected = 1;

  constructor(private navCtrl: NavController) {
    this.setSelected(1);
  }


  public setSelected(codigoCategoria:any) {
    this.selected = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

  public goProduto(produto:any) {
    this.navCtrl.navigateForward('produto', {
      queryParams: { produto: produto }
    });
  }

}
