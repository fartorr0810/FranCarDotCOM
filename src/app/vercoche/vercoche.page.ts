import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocheAInterface } from '../interfaces/coche.interface';
import { DataCocheService } from '../services/data-coche.service';

@Component({
  selector: 'app-vercoche',
  templateUrl: './vercoche.page.html',
  styleUrls: [],
})
export class VercochePage implements OnInit {

  coche: CocheAInterface;
  mostrarcoche:boolean=false;
  constructor(private cocheData:DataCocheService,
    private activadorruta:ActivatedRoute) {
  }

  ngOnInit() {
    this.cocheData.getCochePorId(this.activadorruta.snapshot.params["id"]).subscribe(resp=>{
      this.coche=resp;
      this.mostrarcoche=true;
    });
  }

}
