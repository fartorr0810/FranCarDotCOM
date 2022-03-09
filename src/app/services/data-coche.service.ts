import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { CocheAInterface, CocheInterface } from '../interfaces/coche.interface';

@Injectable({
  providedIn: 'root'
})
export class DataCocheService {

  constructor(private firestore: Firestore) {

  }

  getListaCoches(): Observable<CocheInterface[]>{
    const refcar = collection(this.firestore, 'coches');
    return collectionData(refcar, { idField: 'id'}) as Observable<CocheInterface[]>;
  }

  addCoche(coche: CocheAInterface){
    const refcar = collection(this.firestore, 'coches');
    return addDoc(refcar, coche);
  }

  getCochePorId(id): Observable<CocheInterface>{
    const refcar = doc(this.firestore, `coches/${id}`);
    return docData(refcar, { idField: 'id' }) as Observable<CocheInterface>;
  }

  borrarCochePorId(coche:CocheInterface){
    const refcar = doc(this.firestore, `coches/${coche.id}`);
    return deleteDoc(refcar);
  }

  actualizarCoche(coche: CocheInterface) {
    const noteDocRef = doc(this.firestore, `coches/${coche.id}`);
    return updateDoc(noteDocRef, { marca: coche.marca, modelo: coche.modelo,
    cv:coche.cv,imagen:coche.imagen,lanzamiento:coche.lanzamiento,velocidadmaxima:coche.velocidadmaxima,
   });
  }

}
