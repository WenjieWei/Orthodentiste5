import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {AboutPageModule} from '../pages/about/about.module';
import {CalldrPageModule} from '../pages/calldr/calldr.module';
import {HowtogetPageModule} from '../pages/howtoget/howtoget.module';
import {SendmessagePageModule} from '../pages/sendmessage/sendmessage.module';
import {SendpicturePageModule} from '../pages/sendpicture/sendpicture.module';
import {MyAppointmentPageModule} from '../pages/my-appointment/my-appointment.module';
import {ReferPatientPageModule} from "../pages/refer-patient/refer-patient.module";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Camera} from '@ionic-native/camera';//import in app.module.ts
import {Base64} from '@ionic-native/base64';
import {HTTP} from '@ionic-native/http';
import {CallNumber} from '@ionic-native/call-number';
import {ApiProvider} from '../providers/api/api';
import {HttpModule} from '@angular/http';
import {Calendar} from '@ionic-native/calendar';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        AboutPageModule,
        CalldrPageModule,
        HowtogetPageModule,
        SendmessagePageModule,
        SendpicturePageModule,
        MyAppointmentPageModule,
        ReferPatientPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        CallNumber,
        InAppBrowser,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Camera,
        Base64,
        HTTP,
        ApiProvider,
        Calendar,
        CameraPreview
    ]
})
export class AppModule {
}
