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
export class VercochePage implements OnInit {

  coche: CocheInterface;
  mostrarcoche:boolean=false;
  esfavorito: boolean = false;
  constructor(private cocheData:DataCocheService,
    private activadorruta:ActivatedRoute,
    private socialSharing: SocialSharing,
    private servFavoritos: ServicioFavoritosService) {
  }

  ngOnInit() {
    this.cocheData.getCochePorId(this.activadorruta.snapshot.params["id"]).subscribe(resp=>{
      this.coche=resp;
      this.mostrarcoche=true;
      this.comprobarFavorito(this.coche);
    });
  }

  addFavorito(storageKey: string, value: any){
    this.servFavoritos.set(storageKey, value);
    this.esfavorito = true;
  }

  borrarFavorito(storageKey: string){
    this.servFavoritos.deleteCoche(this.coche);
    this.esfavorito = false;
  }
  compartirEnInstagram(){
    this.socialSharing.shareViaInstagram(this.coche.marca+" "+this.coche.modelo, this.coche.imagen);
  }
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
