import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pet } from '../model/pet';
import { PetService } from '../services/pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent implements OnInit {
  addform: FormGroup;

  pet:Pet;
  
  id: number;
  constructor(public formBuilder:FormBuilder,
              private petServices:PetService,
              private router:Router
              ) {
          this.addform=this.formBuilder.group({
            name:["",Validators.required],
            breed:["",Validators.required],
            birthDate:["",Validators.required],
            deathDate:["",Validators.required]

          })
               }

  ngOnInit() {
  }

  addPet(){
    this.pet=this.addform.value;
    this.petServices.addPets(this.pet).subscribe(()=>{
    this.router.navigate(["/Home"])});

    


  }

}
