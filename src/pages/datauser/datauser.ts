import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatauserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datauser',
  templateUrl: 'datauser.html',
})
export class DatauserPage {
  dataBookings;
  searchId: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('param'));
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatauserPage');
  }

  initializeItems() {
    this.dataBookings = this.navParams.get('param');
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.dataBookings = this.dataBookings.filter((item) => {
        return (item.bookingId.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
