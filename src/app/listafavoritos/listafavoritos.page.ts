import { Component, OnInit } from '@angular/core';
import { CocheAInterface, CocheInterface } from '../interfaces/coche.interface';
import { ServicioFavoritosService } from '../services/servicio-favoritos.service';

@Component({
  selector: 'app-listafavoritos',
  templateUrl: './listafavoritos.page.html',
  styleUrls: ['./listafavoritos.page.scss'],
})
/**
 * Pagina para listar favoritos
 */
export class ListafavoritosPage implements OnInit {
//Atributos
  listafavoritos:CocheInterface[]=[]
  mostrardiv=false;
//Inyectamos los servicios
  constructor(private servFav:ServicioFavoritosService) { }
//Metodos que se llaman al iniciar
  ngOnInit() {
    this.listafavoritos=this.servFav.getCochesFavoritos;
    this.mostrardiv=true;
  }

}
