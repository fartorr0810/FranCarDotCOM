import { Component, OnInit } from '@angular/core';
import { CocheInterface } from '../interfaces/coche.interface';
import { DataCocheService } from '../services/data-coche.service';

@Component({
  selector: 'app-listacoches',
  templateUrl: './listacoches.page.html',
  styleUrls: ['./listacoches.page.scss'],
})
export class ListacochesPage implements OnInit {

  listacoches: CocheInterface[]=[];

  constructor(private serviciocoches:DataCocheService) { }

  ngOnInit() {
    this.obtenerListacoches();
  }
  obtenerListacoches(){
    this.serviciocoches.getListaCoches().subscribe(resp=>{
      this.listacoches=resp;
    });
  }
}
