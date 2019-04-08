import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  sizes = [{id:'XS', img:null}, {id:'S', img:null}, {id:'M', img:null},
           {id:'L', img:null}, {id:'XL', img:null}, {id:'XXL', img:null}];
  fibSeq = [{id:'1', img:null}, {id:'2', img:null}, {id:'3', img:null},
            {id:'5', img:null}, {id:'8', img:null}, {id:'13', img:null},
            {id:'21', img:null}];
  dogs = [{id:'1', img: 'parking1.png', description:'1234 State St', subtitle:'$$', caddress: '1234 State St'},
          {id:'2', img: 'parking2.png', description:'1234 Government St', subtitle:'$', caddress: '1234 Government St'},
          {id:'3', img: 'parking3.png', description:'12 Grimmauld Place', subtitle:'$$$', caddress: '12 Grimmauld Place'},
          {id:'4', img: 'parking4.png', description:'79 German Ln', subtitle:'$', caddress: '79 German Lane'},
          {id:'5', img: 'parking5.png', description:'90 Ringstrasse', subtitle:'$', caddress: '90 Ringstrasse'}];
  options = ['sizes', 'fibSeq', 'dogs'];
  selection = '';
  deck = [];

  constructor(private storage: Storage) {

  }

  setSelection(selection) {
    this.storage.set('deckType', selection);
    this.selection = selection;
  }

  cardValues() {
    console.log(this.selection);
    if (this.selection == 'sizes') {
      return this.sizes;
    } else if (this.selection == 'dogs'){
      return this.dogs;
    } else {
      return this.fibSeq;
    }
  }
}
