import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { StorageService } from '../../providers/storage-service';

/**
 * Generated class for the Pacientes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pacientes',
  templateUrl: 'pacientes.html',
})
export class Pacientes {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private menu: MenuController,
    private storageService: StorageService
    ) {

      this.storageService.get().then(res=>console.log(res));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pacientes');
  }

  

}
