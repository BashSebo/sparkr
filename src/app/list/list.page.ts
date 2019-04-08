import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  items = this.cardService.options;

  constructor(private navCtrl: NavController,
              private cardService: CardService) {
  }

  ngOnInit() {
  }

  onSelect(item) {
    console.log(item);
    this.cardService.setSelection(item);
    // JDavis: navigate back to home
    this.navCtrl.navigateRoot('/home');
  }
}
