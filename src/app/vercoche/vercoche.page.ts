import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocheAInterface, CocheInterface } from '../interfaces/coche.interface';
import { DataCocheService } from '../services/data-coche.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ServicioFavoritosService } from '../services/servicio-favoritos.service';

@Component({
  selector: 'app-vercoche',
  templateUrl: './vercoche.page.html',
  styleUrls: [],
})
/**
 * Pagina para ver los coches
 */
export class VercochePage implements OnInit {
//Atributos
  coche: CocheInterface;
  mostrarcoche:boolean=false;
  esfavorito: boolean = false;
  //Inyectamos servicios
  constructor(private cocheData:DataCocheService,
    private activadorruta:ActivatedRoute,
    private socialSharing: SocialSharing,
    private servFavoritos: ServicioFavoritosService) {
  }
//ngOnInit donde se obtiene el coche de la ruta , asignamos el coche, mostramos el div
//y comprobamos el coche si esta en favoritos
  ngOnInit() {
    this.cocheData.getCochePorId(this.activadorruta.snapshot.params["id"]).subscribe(resp=>{
      this.coche=resp;
      this.mostrarcoche=true;
      this.comprobarFavorito(this.coche);
    });
  }
/**
 * Anadimos coche a favoritos
 */
  addFavorito(storageKey: string, value: any){
    this.servFavoritos.set(storageKey, value);
    this.esfavorito = true;
  }
/**
 * Borrar coche en caso de que ya este anadido a favoritos
 */
  borrarFavorito(storageKey: string){
    this.servFavoritos.deleteCoche(this.coche);
    this.esfavorito = false;
  }
  /**
   * Compartimos por instagram mediante un plugin
   */
  compartirEnInstagram(){
    this.socialSharing.shareViaInstagram(this.coche.marca+" "+this.coche.modelo, this.coche.imagen);
  }
  /**
   * Comprobamos que el coche esta favorito o no
   * @param coche coche que se esta viendo
   */
  comprobarFavorito(coche: CocheInterface){
    this.servFavoritos.buscharCocheFavorito(coche).then(
      favorito => {
        if(favorito){
          this.esfavorito = true;
        }else{
          this.esfavorito = false;
        }
      }
    )

  }

}
