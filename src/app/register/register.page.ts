import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../interfaces/usuario.interface';
import { ControlaccesoService } from '../services/controlacceso.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: [],
})
export class RegisterPage implements OnInit {

  formulario:FormGroup=this.fb.group({
    usuario:['',[Validators.required,Validators.email]],
    password:['']
  });

  usuario:Usuario={
    usuario:'',
    password:''
  };

  constructor(private controlacceso:ControlaccesoService,private fb:FormBuilder) { }

  ngOnInit() {
  }

  register(){
    this.controlacceso.register(this.usuario);
  }
}
