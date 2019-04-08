import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-selected-card',
  templateUrl: './selected-card.page.html',
  styleUrls: ['./selected-card.page.scss'],
})
export class SelectedCardPage implements OnInit {
  card: any;
  public rootPage: any = Map;

  constructor(private modalCtrl: ModalController,
              private router: Router,
              private navParams: NavParams) { }

  ngOnInit() {
    this.card = this.navParams.get('value');
  }
  gotoMap() {
    this.router.navigateByUrl('/map');
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
