import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario.interface';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
/**
 * Servicio de control de acceso
 */
export class ControlaccesoService {
//Inyectamos los servicios
  constructor(private firestore : Firestore, private router:Router) {

  }
/**
 * Metodo para registrar un usuario, Despues se le pasa el auth y se le pasamos el usuario
 * tras ello se le pasa la id y se almacena en la base de datos
 * @param usuario recibe un usuario
 */
  register(usuario:Usuario){
    let auth=getAuth();
    createUserWithEmailAndPassword(auth,usuario.usuario,usuario.password).then((userCredendtial)=> {
      let user=userCredendtial.user;
      localStorage.setItem('id',user.uid);
      this.router.navigateByUrl('dashboard')
    });
  }
/**
 * Metodo para loguear un usuario , se crea el auth, llamamos al metodo implicito se le llama al auth
 * el usuario y la password y tras ello se le pasa la id.
 * @param usuario
 */
  login(usuario:Usuario){
    let auth=getAuth();
    signInWithEmailAndPassword(auth,usuario.usuario,usuario.password).then((userCredentials)=>{
      let user=userCredentials.user;
      localStorage.setItem('id',user.uid);
      this.router.navigateByUrl('dashboard')
    })
  }
/**
 * Metodo para comprobar usuario a partir de la id
 */
  comprobarUsuario(){
    let id=localStorage.getItem('id');
    let auth=getAuth();
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) =>{
        if (user.uid==id) {
          resolve(true);
        }else{
          resolve(false);
        }
      });
    });  }
}
