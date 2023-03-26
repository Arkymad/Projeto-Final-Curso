import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor
  (public navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  async logout(): Promise<void> {
    await this.storage.remove('email');
    this.navCtrl.navigateForward('/home');
  }

}
