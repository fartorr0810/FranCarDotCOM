import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CocheAInterface } from '../interfaces/coche.interface';
import { DataCocheService } from '../services/data-coche.service';

@Component({
  selector: 'app-anadircoche',
  templateUrl: './anadircoche.page.html',
  styleUrls: [],
})
/**
 * Pagina de anadir coche
 */
export class AnadircochePage implements OnInit {
  //Declaramos el formulario
  formulario: FormGroup=this.fb.group({
    marca: [''],
    modelo: [''],
    velocidadmaxima: [''],
    lanzamiento: [''],
    cv:[''],
    imagen:['']
  })
  //Interfaz del coche
  coche:CocheAInterface={
    marca: '',
    modelo: '',
    velocidadmaxima: 0,
    lanzamiento: 0,
    cv:0,
    imagen:''
  }
  //Constructor
  constructor(private serviciocoche:DataCocheService, private fb:FormBuilder,
    private route:Router,
    private alerta:AlertController) {
  }

  ngOnInit() {
  }
  //Anadimos coche a la base de datos de firebase y posteriormente nos manda al dashboard
  anadirCoche(){
    this.serviciocoche.addCoche(this.coche);
    this.mostrarAlerta();
    this.route.navigateByUrl("/dashboard");
  }
//Metodo en el que se muestra la alerta
  mostrarAlerta(){
    this.alerta.create({
      header: 'Creado',
      subHeader: 'Vehiculo añadido con exito',
      message: 'Ahre',
      buttons: ['OK']
    }).then(resp=>{
      this.route.navigateByUrl('/listacoches')
      resp.present();
    });
  }

}
