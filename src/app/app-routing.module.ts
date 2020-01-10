import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { RegisterPetComponent } from './register-pet/register-pet.component';
import { PetViewEdittComponent } from './pet-view-editt/pet-view-editt.component';


const routes: Routes = [
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent},
    {path:'addPath',component:RegisterPetComponent},
    {path:'editPet/:id',component:PetViewEdittComponent}
 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  