import { Routes } from "@angular/router";

import {HospitalComponent} from '../../intermedio2/hospital/hospital.component'
import { MedicoComponent } from "src/app/intermedio2/medico/medico.component";
import { IncrementadorComponent } from "src/app/intermedio2/incrementador/incrementador.component";

export const ROUTES:Routes = [
    {path:'hospita',component:HospitalComponent},
    {path:'medico/:id',component:MedicoComponent},
    {path:'**',component:IncrementadorComponent},
]