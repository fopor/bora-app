import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BoraagoraPage } from '../boraagora/boraagora';
import { BoraHojePage } from '../bora-hoje/bora-hoje';


/**
 * Generated class for the MeetingCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meeting-create',
  templateUrl: 'meeting-create.html',
})
export class MeetingCreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingCreatePage');
  }

  openPageBoraHoje(){
    this.navCtrl.push(BoraHojePage);
  }
}
