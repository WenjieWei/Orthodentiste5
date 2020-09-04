import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAppointmentPage } from './my-appointment';

@NgModule({
  declarations: [
    MyAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAppointmentPage),
  ],
})
export class MyAppointmentPageModule {}
