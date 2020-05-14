import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  viagens=[
    {
      local:'Madrid',
      img:'https://www.bing.com/images/search?view=detailV2&ccid=YrW6aOTX&id=736607A6F443401BB1B110CB1D0F1316B3C28D44&thid=OIP.YrW6aOTXMWfHFjDGehtJmAHaEK&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2fWU_drmfGaig%2fmaxresdefault.jpg&exph=720&expw=1280&q=madrid&simid=608020764411299222&selectedIndex=2&ajaxhist=0',
      descricao:'Madrid ou Madri é a capital e a maior cidade da Espanha. Tem uma população de aproximadamente 3,3 milhões de pessoas, com uma área metropolitana com cerca de 6,5 milhões de habitantes. É a segunda maior cidade da União Europeia, depois de Berlim, e sua área metropolitana é a terceira maior da UE, depois de Londres e Paris. A área urbana da capital espanhola abrange um total de 604,3 de quilômetros quadrados.',
      data:'01/11/2019'
    },
    {
      local:'Londres',
      img:'https://www.bing.com/images/search?view=detailV2&ccid=q7UWxNCo&id=F7DD09B3C3E31C1A734539EB47DCCCF6928668D6&thid=OIP.q7UWxNCo6QgP5bkpbQnSqQHaEK&mediaurl=http%3a%2f%2fi.ytimg.com%2fvi%2fPtWeqZsuzpE%2fmaxresdefault.jpg&exph=720&expw=1280&q=Londres&simid=608054247953269385&selectedIndex=0&ajaxhist=0',
      descricao:'Londres é a capital da Inglaterra e do Reino Unido. Por dois milênios, foi um grande povoado e sua história remonta à sua fundação pelos romanos, quando foi nomeada Londínio. O centro de Londres, a antiga City of London, também conhecida como The Square Mile ou The City, mantém suas fronteiras medievais. Pelo menos desde o século XIX, o nome "Londres" se refere à metrópole desenvolvida em torno desse núcleo. Hoje, a maior parte dessa conurbação constitui a região da Grande Londres, cuja área administrativa tem seu próprio prefeito eleito e assembleia.',
      data:'01/11/2018'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
