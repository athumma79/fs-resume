import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public myDateOfBirth: String;

  ionViewDidEnter() {
    this.myDateOfBirth = "1999-29-04"
  }
  
  async pressMe() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Hi!!',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Toast',
      duration: 2000
    });
    toast.present();
  }

  constructor(public toastController: ToastController, public alertController: AlertController) {}
}
