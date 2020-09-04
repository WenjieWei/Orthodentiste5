import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";

/**
 * Generated class for the ReferPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-refer-patient',
    templateUrl: 'refer-patient.html',
})
export class ReferPatientPage {

    name = "";
    phoneNumber = "";
    email = "";

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public api: ApiProvider
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ReferPatientPage');
    }

    sendInvitation() {
        var postData = {
            name: this.name,
            phone: this.phoneNumber,
            email: this.email
        };

        this.api.loading();
        this.api.postRequest(ApiProvider.METHODS.SENDINVITATION, postData).then((data: any) => {
            this.api.hideLoading();
            if (data && data.status) {
                this.api.showToast(data.message);

                this.name = "";
                this.email = "";
                this.phoneNumber = "";
            } else {
                this.api.showToast(data.message);
            }
        }).catch((error) => {
            this.api.hideLoading();
            this.api.showToast(error.message);
        });
    }

}
