import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CocheAInterface } from '../interfaces/coche.interface';
import { DataCocheService } from '../services/data-coche.service';

@Component({
  selector: 'app-editarcoche',
  templateUrl: './editarcoche.page.html',
  styleUrls: ['./editarcoche.page.scss'],
})
export class EditarcochePage implements OnInit {

  coche: CocheAInterface;
  mostrarcoche:boolean=false;

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
  constructor(private serviciocoche:DataCocheService, private fb:FormBuilder,
    private route:Router,
    private alerta:AlertController,
    private activadorruta:ActivatedRoute) { }


  ngOnInit() {
    this.serviciocoche.getCochePorId(this.activadorruta.snapshot.params["id"]).subscribe(resp=>{
      console.log(resp);
      this.coche=resp;
      this.mostrarcoche=true;
    });
  }

  editarCoche(){
    this.cochecito=this.coche;
    this.serviciocoche.addCoche(this.cochecito);
  }
}
