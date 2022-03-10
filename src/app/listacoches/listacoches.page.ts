import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CocheInterface } from '../interfaces/coche.interface';
import { DataCocheService } from '../services/data-coche.service';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-listacoches',
  templateUrl: './listacoches.page.html',
  styleUrls: ['./listacoches.page.scss'],
})
/**
 * Lista de paginas del coche
 */
export class ListacochesPage implements OnInit {
//Atributos
  listacoches: CocheInterface[]=[];
/**
 * Inyectamos los servicios
 * @param serviciocoches servicio de coches
 * @param alerta la alerta
 * @param route ruta para ir a la lista de coches
 */
  constructor(private serviciocoches:DataCocheService,
    private alerta:AlertController,
    private route:Router) { }

  ngOnInit() {
    this.obtenerListacoches();
  }
  /**
   * Obtenemos lista de coches
   */
  obtenerListacoches(){
    this.serviciocoches.getListaCoches().subscribe(resp=>{
      this.listacoches=resp;
    });
  }
  /**
   * Eliminamos el coche
   * @param coche coche que se va a eliminar usando la id
   */
  eliminarCoche(coche:CocheInterface){
    this.serviciocoches.borrarCochePorId(coche);
    this.mostrarAlerta();
  }
  /**
   * Mostramos la alerta al eliminar el coche
   */
  mostrarAlerta(){
    this.alerta.create({
      header: 'Eliminado',
      subHeader: 'Vehiculo eliminado con exito',
      buttons: ['OK']
    }).then(resp=>{
      this.route.navigateByUrl('/listacoches')
      resp.present();
    });
  }

}
