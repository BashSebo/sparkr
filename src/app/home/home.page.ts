import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectedCardPage } from '../selected-card/selected-card.page';
import { CardService } from '../services/card.service';
import { Storage } from '@ionic/storage';
//import {Platform } from '@ionic-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //template added
  //template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
})
export class HomePage {
  cards = []; // this.cardsService.deck;
  //@ViewChild('myMap') nav: NavController
  public rootPage: any = Map;

  constructor(public modalCtrl: ModalController,
              //public navCtrl: NavController,
              private cardService: CardService,
              //private platform: Platform,
              private router: Router,
              private storage: Storage ) {}

  ngAfterViewInit() {
    this.storage.get('deckType').then((val) => {
      console.log(val);
      if (val) {
        this.cardService.selection = val;
      } else {
        this.cardService.selection = 'sizes';
      }
      this.cards = this.cardService.cardValues();
      console.log(this.cards);
    });
  }

  async onSelected(card) {
    console.log(card);
    const modal = await this.modalCtrl.create({
      component: SelectedCardPage,
      componentProps: { value: card }
    });
    return await modal.present();
  }

  gotoMap() {
    this.router.navigateByUrl('/map');
  }
}
