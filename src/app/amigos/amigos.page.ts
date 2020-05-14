import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  amigos =[
    {
      nome:'Jessé',
      idade: '22',
      level: 5
    },
    {
      nome:'Gilmarley',
      idade: '23',
      level: 5
    },
    {
      nome:'Marllon',
      idade: '23',
      level: 2
    },
    {
      nome:'Matheus',
      idade: '19',
      level: 3
    },
    {
      nome:'Vinicius',
      idade: '24',
      level: 1
    },
    {
      nome:'José',
      idade: '22',
      level: 3
    },
    {
      nome:'Pedro',
      idade: '19',
      level: 5
    }
  ]

  constructor(private actionSheetController: ActionSheetController) { }


  ngOnInit() {
  }
    async deleteAmigoAction(nome: string){
      let buttons = [
        {text:"Deletar", role:"destructive",
        handler:()=>{
          this.deleteAmigoAction(nome);
        }},
        {text:'Editar'},
        {text:"Cancelar", role:"cancel"}
      ];
      const actionSheet = await this.actionSheetController.create({
        header:'Ações',
        buttons: buttons
      });
        await actionSheet.present();
    }
    deleteAmigo(nome: string){
      this.amigos.forEach((item,index)=>{
        if(item.nome === nome) this.amigos.splice(index,1);
      })
    }
  }
