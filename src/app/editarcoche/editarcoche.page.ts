import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CocheAInterface, CocheInterface } from '../interfaces/coche.interface';
import { DataCocheService } from '../services/data-coche.service';

@Component({
  selector: 'app-editarcoche',
  templateUrl: './editarcoche.page.html',
  styleUrls: ['./editarcoche.page.scss'],
})
/**
 * Pagina para editar la pagina
 */
export class EditarcochePage implements OnInit {
//Atributos
  coche: CocheAInterface;
  mostrarcoche:boolean=false;
//Declaramos formulario
  formulario: FormGroup=this.fb.group({
    marca: [''],
    modelo: [''],
    velocidadmaxima: [''],
    lanzamiento: [''],
    cv:[''],
    imagen:['']
  })
  cochecito:CocheAInterface={
    marca: '',
    modelo: '',
    velocidadmaxima: 0,
    lanzamiento: 0,
    cv:0,
    imagen:''
  }
  //Inyectamos servicios
  constructor(private serviciocoche:DataCocheService, private fb:FormBuilder,
    private route:Router,
    private alerta:AlertController,
    private activadorruta:ActivatedRoute) { }

/**
 * Recogemos coche por id que viaja en la ruta
 */
  ngOnInit() {
    this.serviciocoche.getCochePorId(this.activadorruta.snapshot.params["id"]).subscribe(resp=>{
      this.coche=resp;
      this.mostrarcoche=true;
    });
  }
/**
 * Editar coche y posteriormente se muestra la alerta y se sube a la base de datos
 */
  editarCoche(){
    this.cochecito=this.coche;
    let num=this.activadorruta.snapshot.params["id"]
    let cocheeditado:CocheInterface={
      id: num,
      marca: this.cochecito.marca,
      modelo: this.cochecito.modelo,
      velocidadmaxima: this.cochecito.velocidadmaxima,
      lanzamiento: this.cochecito.lanzamiento,
      cv: this.cochecito.cv,
      imagen: this.cochecito.imagen
    }
    this.serviciocoche.actualizarCoche(cocheeditado);
    this.mostrarAlerta();

  }
  //Alerta
  mostrarAlerta(){
    this.alerta.create({
      header: 'Edición completada',
      subHeader: 'Vehiculo editado con exito',
      buttons: ['OK']
    }).then(resp=>{
      this.route.navigateByUrl('/listarcoche')
    })
  }

}
