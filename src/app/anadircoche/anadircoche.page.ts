import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CocheAInterface } from '../interfaces/coche.interface';
import { DataCocheService } from '../services/data-coche.service';

@Component({
  selector: 'app-anadircoche',
  templateUrl: './anadircoche.page.html',
  styleUrls: [],
})
export class AnadircochePage implements OnInit {
  formulario: FormGroup=this.fb.group({
    marca: [''],
    modelo: [''],
    velocidadmaxima: [''],
    lanzamiento: [''],
    cv:[''],
    imagen:['']
  })
  coche:CocheAInterface={
    marca: '',
    modelo: '',
    velocidadmaxima: 0,
    lanzamiento: 0,
    cv:0,
    imagen:''
  }
  constructor(private serviciocoche:DataCocheService, private fb:FormBuilder,private route:Router) {

  }

  ngOnInit() {
  }
  anadirCoche(){
    this.serviciocoche.addBici(this.coche);
    this.route.navigateByUrl('/listacoches')
  }
}
