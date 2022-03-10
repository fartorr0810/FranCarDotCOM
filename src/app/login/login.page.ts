import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../interfaces/usuario.interface';
import { ControlaccesoService } from '../services/controlacceso.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [],
})
export class LoginPage implements OnInit {
//Atributos
  formulario:FormGroup=this.fb.group({
    usuario:[''],
    password:['']
  })

  usuario:Usuario={
    usuario:'',
    password:''
  }
  //Inyectamos servicios
  constructor(private controlacceso:ControlaccesoService,private fb:FormBuilder) { }

  ngOnInit() {
  }
//Llamamos al metodo login
  login(){
    this.controlacceso.login(this.usuario);
  }
}
