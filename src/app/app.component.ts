import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {AboutPage} from '../pages/about/about';

import {CalldrPage} from '../pages/calldr/calldr';
import {HowtogetPage} from '../pages/howtoget/howtoget';
import {SendmessagePage} from '../pages/sendmessage/sendmessage';
import {SendpicturePage} from '../pages/sendpicture/sendpicture';
import {MyAppointmentPage} from "../pages/my-appointment/my-appointment";
import {ReferPatientPage} from "../pages/refer-patient/refer-patient";
import {CallNumber} from '@ionic-native/call-number';

import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;
    // rootPage: any = ReferPatientPage;

    pages: Array<{ title: string, component: any, icon: string, type?: string }>;

    constructor(
        private callNumber: CallNumber,
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {
                title: 'accueil',
                component: HomePage,
                icon: 'md-home'
            },
            {
                title: 'à propos',
                component: AboutPage,
                icon: 'md-list-box'
            },
            {
                title: 'comment se rendre?',
                component: HowtogetPage,
                icon: 'md-navigate'
            },
            {
                title: 'appeller Dr Bach',
                component: CalldrPage,
                icon: 'md-call',
                type: 'call'
            },
            {
                title: 'envoyer message',
                component: SendmessagePage,
                icon: 'md-text'
            },
            {
                title: 'envoyer photos',
                component: SendpicturePage,
                icon: 'md-reverse-camera'
            },
            {
                title: 'mon Rendez-vous',
                component: MyAppointmentPage,
                icon: 'md-calendar'
            },
            {
                title: 'référer un patient',
                component: ReferPatientPage,
                icon: 'md-person-add'
            }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        if (page.type == "call") {
            this.callNumber.callNumber("1-514-340-2224", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(err => console.log('Error launching dialer', err));
        } else {
            this.nav.setRoot(page.component);
        }
    }
}
