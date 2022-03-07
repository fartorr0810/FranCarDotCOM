import { Component, OnInit } from '@angular/core';
import { CocheAInterface } from '../interfaces/coche.interface';
import { DataCocheService } from '../services/data-coche.service';

@Component({
  selector: 'app-vercoche',
  templateUrl: './vercoche.page.html',
  styleUrls: ['./vercoche.page.scss'],
})
export class VercochePage implements OnInit {
  coche!: CocheAInterface;
  constructor(private cocheData:DataCocheService) {
  }

  ngOnInit() {
    this.cocheData.getCochePorId(1);
  }

}
