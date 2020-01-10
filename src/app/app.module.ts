import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { CommonModule } from '@angular/common';
import { RegisterPetComponent } from './register-pet/register-pet.component';

import { PetViewManagerComponent } from './pet-view-manager/pet-view-manager.component';
import { PetViewEdittComponent } from './pet-view-editt/pet-view-editt.component';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
     AppComponent,
     HeaderComponent,
    
     HomeComponent,
    
     RegisterPetComponent,
    
     
    
     PetViewManagerComponent,
    
     
    
     PetViewEdittComponent
    
    
    
     
    
    
  ],


  imports: [BrowserModule ,
   BrowserAnimationsModule,
   MatToolbarModule,
   MatExpansionModule,
   MatInputModule,
   MatButtonModule,
   FormsModule,
   MatSnackBarModule,
   HttpClientModule,
   MatCardModule,
  AppRoutingModule,
  ReactiveFormsModule,
  MatTabsModule,
  MatCheckboxModule,
  MatTableModule,
  
  MatIconModule,
  MatSelectModule,
  MatDialogModule,
  MatGridListModule,
 
  CommonModule,
  MatDatepickerModule,
  MatNativeDateModule
 

 

 
  ],
  entryComponents:[HomeComponent],
  
  providers: [MatDatepickerModule],


  bootstrap: [ AppComponent]
})
export class AppModule { }
