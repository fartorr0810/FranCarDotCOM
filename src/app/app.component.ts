import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { CocheAInterface } from './interfaces/coche.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  listacoches:CocheAInterface[]=[];
  constructor(private storage: Storage) {

  }
  async ngOnInit() {
    await this.storage.create();
  }
}
