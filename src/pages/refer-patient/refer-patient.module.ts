import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReferPatientPage } from './refer-patient';

@NgModule({
  declarations: [
    ReferPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(ReferPatientPage),
  ],
})
export class ReferPatientPageModule {}
