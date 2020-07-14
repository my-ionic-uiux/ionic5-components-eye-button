import { Component, OnInit } from '@angular/core';
import { ProductDetailsModalPage } from '../../modals/product-details-modal/product-details-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-eye-button',
  templateUrl: './eye-button.component.html',
  styleUrls: ['./eye-button.component.scss'],
  entryComponents:[
    ProductDetailsModalPage,
  ]
})
export class EyeButtonComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async onClick() {
    // TODO: open modal product details modal
    const modal = await this.modalController.create({
      component: ProductDetailsModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'product': {
          'name': 'Product'
        },
      }
    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
