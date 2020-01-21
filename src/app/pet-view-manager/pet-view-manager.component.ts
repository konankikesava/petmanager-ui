import { Component, OnInit } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from '../services/pet.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pet-view-manager',
  templateUrl: './pet-view-manager.component.html',
  styleUrls: ['./pet-view-manager.component.css']
})
export class PetViewManagerComponent implements OnInit {
  AllPets:Array<Pet>;
  constructor(private petServices:PetService,
              private dialogBox:MatDialog) { }

  ngOnInit() {
    this.petServices.getAllPets().subscribe(data=>{
      this.AllPets=data;
    })
  }

  deleteInformation(id:number){
    this.petServices.deletePet(id).subscribe(()=>{
      this.petServices.getAllPets().subscribe(data=>{
        this.AllPets=data;
      })
    })
  }


}
