import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { CocheAInterface, CocheInterface } from '../interfaces/coche.interface';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio de firebase
 */
export class DataCocheService {
//Inyectamos servicios
  constructor(private firestore: Firestore) {

  }
/**
 * Obtener lista de coches
 * @returns devuelve la lista de coches
 */
  getListaCoches(): Observable<CocheInterface[]>{
    const refcar = collection(this.firestore, 'coches');
    return collectionData(refcar, { idField: 'id'}) as Observable<CocheInterface[]>;
  }
/**
 * Anadir coche a la base de datos
 * @param coche que se anade
 */
  addCoche(coche: CocheAInterface){
    const refcar = collection(this.firestore, 'coches');
    return addDoc(refcar, coche);
  }
/**
 * Obtenemos coche por la id
 * @param id del coche
 */
  getCochePorId(id): Observable<CocheInterface>{
    const refcar = doc(this.firestore, `coches/${id}`);
    return docData(refcar, { idField: 'id' }) as Observable<CocheInterface>;
  }
/**
 * Borrar coche por la id
 * @param coche que se va eliminar
 */
  borrarCochePorId(coche:CocheInterface){
    const refcar = doc(this.firestore, `coches/${coche.id}`);
    return deleteDoc(refcar);
  }
/**
 * Actualizamos los datos del coche
 * @param coche del servicio
 */
  actualizarCoche(coche: CocheInterface) {
    const noteDocRef = doc(this.firestore, `coches/${coche.id}`);
    return updateDoc(noteDocRef, { marca: coche.marca, modelo: coche.modelo,
    cv:coche.cv,imagen:coche.imagen,lanzamiento:coche.lanzamiento,velocidadmaxima:coche.velocidadmaxima,
   });
  }

}
