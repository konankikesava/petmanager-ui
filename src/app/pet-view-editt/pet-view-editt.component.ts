import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pet } from '../model/pet';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../services/pet.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pet-view-editt',
  templateUrl: './pet-view-editt.component.html',
  styleUrls: ['./pet-view-editt.component.css']
})
export class PetViewEdittComponent implements OnInit {
updateform:FormGroup;
pet:Pet;
id:number;
public isUpdated:boolean=false;
  constructor(public formBulider:FormBuilder,private routeID:ActivatedRoute,
    private PetService:PetService,private router:Router,private httpRequest:HttpClient) {

      this.updateform=this.formBulider.group({
        name:["",Validators.required],
        breed:["",Validators.required],
        birthDate:["",Validators.required],
        deathDate:["",Validators.required]
      })
     }

  ngOnInit() {
    this.routeID.params.subscribe(params=>{
      this.id=+params['id'];
    })
    this.PetService.getPet(this.id).subscribe(data=>{
      this.pet=data;
      console.log(this.pet);
      this.isUpdated=true;
    })
   }

   UpdatePet(){
     this.pet=this.updateform.value;
     this.PetService.updatePet(this.pet,this.id).subscribe(()=>{
       this.router.navigate(["/Home"]);
     })
   }

}
