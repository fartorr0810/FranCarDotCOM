import { Injectable } from '@angular/core';
import { CocheAInterface, CocheInterface } from '../interfaces/coche.interface';
import { Storage } from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio de favoritos del coche
 */
export class ServicioFavoritosService {
//Atributos
  private _storage: Storage | null = null;
  private listacochesfavoritos:CocheInterface[]=[];
//Inyectamos servicios y llamamos al init
  constructor(private storage: Storage) {
    this.init();

  }
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }
/**
 * Se anade un coche a la lista y se guarda
 * @param key
 * @param coche
 */
  public set(key: string, coche:CocheInterface) {
    this.listacochesfavoritos.push(coche)
    this._storage?.set(key, this.listacochesfavoritos);
  }
/**
 * Se elimina un coche de favoritos
 * @param coche que se va eliminar
 */
  public deleteCoche(coche:CocheInterface){
    let encontrado:boolean=false;
    let posicion:number=0;
    for (let index = 0; index < this.listacochesfavoritos.length; index++) {
      const element = this.listacochesfavoritos[index];
      if (element.id==coche.id){
        encontrado=true;
        posicion=index;
      }
    }
    if (encontrado==true){
      this.listacochesfavoritos.splice(posicion);
      this._storage?.set("favoritos", this.listacochesfavoritos);
    }
  }
/**
 * Buscar los coches de favoritos
 */
  async findCocheFavorito(storageKey: string){
    return await this.storage.get('favoritos');
  }
  /**
   * Buscar coches favoritos mediante el for y si lo encuentra, devolver true o false si
   * lo encuentra o no
   * @param coche coche que se busca
   * @returns devolver true o false
   */
  async buscharCocheFavorito(coche:CocheInterface){
    let encontrado:boolean=false;
    let posicion:number=0;
    for (let index = 0; index < this.listacochesfavoritos.length; index++) {
      const element = this.listacochesfavoritos[index];
      if (element.id==coche.id){
        encontrado=true;
        posicion=index;
      }
    }
    if (encontrado==true){
      return await true;
    }
    return await false;
  }
  get getCochesFavoritos(){
    return this.listacochesfavoritos;
  }


}
