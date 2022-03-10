import { Component, OnInit } from '@angular/core';
import { CocheAInterface, CocheInterface } from '../interfaces/coche.interface';
import { ServicioFavoritosService } from '../services/servicio-favoritos.service';

@Component({
  selector: 'app-listafavoritos',
  templateUrl: './listafavoritos.page.html',
  styleUrls: ['./listafavoritos.page.scss'],
})
export class ListafavoritosPage implements OnInit {

  listafavoritos:CocheInterface[]=[]
  mostrardiv=false;

  constructor(private servFav:ServicioFavoritosService) { }

  ngOnInit() {
    this.listafavoritos=this.servFav.getCochesFavoritos;
    this.mostrardiv=true;
  }

}
