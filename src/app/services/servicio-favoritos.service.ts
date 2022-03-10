import { Injectable } from '@angular/core';
import { CocheAInterface, CocheInterface } from '../interfaces/coche.interface';
import { Storage } from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})
export class ServicioFavoritosService {

  private _storage: Storage | null = null;
  private listacochesfavoritos:CocheInterface[]=[];

  constructor(private storage: Storage) {
    this.init();

  }
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, coche:CocheInterface) {
    this.listacochesfavoritos.push(coche)
    this._storage?.set(key, this.listacochesfavoritos);
  }

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

  async findCocheFavorito(storageKey: string){
    return await this.storage.get('favoritos');
  }
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
