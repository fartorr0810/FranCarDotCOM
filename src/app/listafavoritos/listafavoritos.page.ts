import { Component, OnInit } from '@angular/core';
import { CocheAInterface, CocheInterface } from '../interfaces/coche.interface';

@Component({
  selector: 'app-listafavoritos',
  templateUrl: './listafavoritos.page.html',
  styleUrls: ['./listafavoritos.page.scss'],
})
export class ListafavoritosPage implements OnInit {

  listafavoritos:CocheInterface[]=this.storage.get('favoritos');

  constructor(private storage:Storage) { }

  ngOnInit() {

  }

}
