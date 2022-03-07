import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
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
    const biciRef = collection(this.firestore, 'coches');
    return collectionData(biciRef, { idField: 'id'}) as Observable<CocheInterface[]>;
  }

  addCoche(coche: CocheAInterface){
    const biciRef = collection(this.firestore, 'coches');
    return addDoc(biciRef, coche);
  }

  getCochePorId(id): Observable<CocheInterface>{
    const biciRef = doc(this.firestore, `coches/${id}`);
    return docData(biciRef, { idField: 'id' }) as Observable<CocheInterface>;
  }

  borrarCochePorId(coche:CocheInterface){
    const biciRef = doc(this.firestore, `cochess/${coche.id}`);
    return deleteDoc(biciRef);
  }
}
