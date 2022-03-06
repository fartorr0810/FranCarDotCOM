import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario.interface';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class ControlaccesoService {

  constructor(private firestore : Firestore, private router:Router) {

  }

  register(usuario:Usuario){
    let auth=getAuth();
    createUserWithEmailAndPassword(auth,usuario.usuario,usuario.password).then((userCredendtial)=> {
      let user=userCredendtial.user;
      localStorage.setItem('id',user.uid);
      this.router.navigateByUrl('dashboard')
    });
  }

  login(usuario:Usuario){
    let auth=getAuth();
    signInWithEmailAndPassword(auth,usuario.usuario,usuario.password).then((userCredentials)=>{
      let user=userCredentials.user;
      localStorage.setItem('id',user.uid);
      this.router.navigateByUrl('dashboard')
    })
  }

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
