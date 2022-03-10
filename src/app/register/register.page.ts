import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../interfaces/usuario.interface';
import { ControlaccesoService } from '../services/controlacceso.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: [],
})
/**
 * Pagina de registro
 */
export class RegisterPage implements OnInit {
//Declaramos formulario
  formulario:FormGroup=this.fb.group({
    usuario:['',[Validators.required,Validators.email]],
    password:['']
  });

  usuario:Usuario={
    usuario:'',
    password:''
  };
//Inyectamos servicios
  constructor(private controlacceso:ControlaccesoService,private fb:FormBuilder) { }

  ngOnInit() {
  }
//Llamamos al metodo register
  register(){
    this.controlacceso.register(this.usuario);
  }
}
