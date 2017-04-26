import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Pacientes } from './pacientes';

@NgModule({
  declarations: [
    Pacientes,
  ],
  imports: [
    IonicModule.forChild(Pacientes),
  ],
  exports: [
    Pacientes
  ]
})
export class PacientesModule {}
