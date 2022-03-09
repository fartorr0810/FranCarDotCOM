import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CocheInterface } from '../interfaces/coche.interface';
import { DataCocheService } from '../services/data-coche.service';

@Component({
  selector: 'app-listacoches',
  templateUrl: './listacoches.page.html',
  styleUrls: ['./listacoches.page.scss'],
})
export class ListacochesPage implements OnInit {

  listacoches: CocheInterface[]=[];

  constructor(private serviciocoches:DataCocheService,
    private alerta:AlertController,
    private route:Router) { }

  ngOnInit() {
    this.obtenerListacoches();
  }
  obtenerListacoches(){
    this.serviciocoches.getListaCoches().subscribe(resp=>{
      this.listacoches=resp;
    });
  }
  eliminarCoche(coche:CocheInterface){
    this.serviciocoches.borrarCochePorId(coche);
    this.mostrarAlerta();
  }
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
