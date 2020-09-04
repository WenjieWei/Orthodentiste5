import {Component, ViewChild} from '@angular/core';
import {Nav, NavController} from 'ionic-angular';
import {AboutPage} from '../about/about';

import {CalldrPage} from '../calldr/calldr';
import {HowtogetPage} from '../howtoget/howtoget';
import {SendmessagePage} from '../sendmessage/sendmessage';
import {SendpicturePage} from '../sendpicture/sendpicture';
import {CallNumber} from "@ionic-native/call-number";
import {MyAppointmentPage} from "../my-appointment/my-appointment";
import {ReferPatientPage} from "../refer-patient/refer-patient";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    pages: Array<{ title: string, component: any, icon: string, image: string, type?: string }>;

    constructor(
        public navCtrl: NavController,
        private callNumber: CallNumber
    ) {
        // used for an example of ngFor and navigation
        this.pages = [
            // {
            //     title: 'Home',
            //     component: HomePage,
            //     icon: 'md-home'
            // },
            {
                title: 'À propos',
                component: AboutPage,
                icon: 'md-list-box',
                image: 'texting-smartphone.jpg'
            },
            {
                title: 'Comment se rendre',
                component: HowtogetPage,
                icon: 'md-navigate',
                image: 'map-kit.jpg'
            },
            {
                title: 'Appeller Dr Bach',
                component: CalldrPage,
                icon: 'md-call',
                image: 'smartphonecall.jpg',
                type: 'call'
            },
            {
                title: 'Envoyer message',
                component: SendmessagePage,
                icon: 'md-text',
                image: 'data-security.jpg'
            },
            {
                title: 'Envoyer photo',
                component: SendpicturePage,
                icon: 'md-reverse-camera',
                image: 'selfie-smartphone.jpg'
            },
            {
                title: 'Mon Rendez-vous',
                component: MyAppointmentPage,
                icon: 'md-calendar',
                image: 'appointment.jpg'
            },
            {
                title: 'Référer un patient',
                component: ReferPatientPage,
                icon: 'md-person-add',
                image: 'referfriend.jpg'
            }
        ];
    }


    openPage(page) {
        if (page.type == "call") {
            this.callNumber.callNumber("1-514-340-2224", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(err => console.log('Error launching dialer', err));
        } else {
            this.navCtrl.setRoot(page.component);
        }
    }

}
