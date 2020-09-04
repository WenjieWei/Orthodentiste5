import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Calendar, CalendarOptions} from '@ionic-native/calendar';
import Moment from 'moment';
import {ApiProvider} from "../../providers/api/api";

/**
 * Generated class for the MyAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-my-appointment',
    templateUrl: 'my-appointment.html',
})
export class MyAppointmentPage {

    title = "";
    location = "";

    eventTime = {
        start: "",
        end: ""
    };

    eventDate = {
        start: "",
        end: ""
    };

    hasReadWritePermission = true;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private calendar: Calendar,
        public api: ApiProvider
    ) {
    }

    ionViewDidLoad() {
        this.calendar.hasReadWritePermission().then((res) => {
            this.hasReadWritePermission = true;
        }).catch((error) => {
            this.calendar.requestReadWritePermission().then((res) => {
                this.hasReadWritePermission = true;
            }).catch((error) => {

            });
        });

        console.log('ionViewDidLoad MyAppointmentPage');
    }

    createEvent() {
        if (!this.title) {
            this.api.showToast("Enter event title");
        } else if (!this.location) {
            this.api.showToast("Enter event location");
        } else if (!this.eventDate.start || !this.eventTime.start) {
            this.api.showToast("Enter event start date time");
        } else if (!this.eventDate.end || !this.eventTime.end) {
            this.api.showToast("Enter event end date time");
        } else {
            var startDate = Moment(this.eventDate.start + " " + this.eventTime.start, "YYYY-MM-DD H:mm").toDate();
            var endDate = Moment(this.eventDate.end + " " + this.eventTime.end, "YYYY-MM-DD H:mm").toDate();

            var calOptions: CalendarOptions = this.calendar.getCalendarOptions();
            calOptions.firstReminderMinutes = 60 * 24;
            calOptions.secondReminderMinutes = 60 * 1;

            this.calendar.createEventWithOptions(this.title, this.location, "", startDate, endDate, calOptions).then((res) => {
                this.api.showToast("Event created successfully");

                this.eventDate.start = "";
                this.eventDate.end = "";
                this.eventTime.start = "";
                this.eventTime.end = "";
                this.title = "";
                this.location = "";
            }).catch((error) => {
                this.api.showToast(error.message);
            });
        }
    }



}
