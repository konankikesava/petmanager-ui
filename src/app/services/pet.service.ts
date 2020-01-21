import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../model/pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpRequest:HttpClient) { }

  addPets(pet:Pet):Observable<any>{
    return this.httpRequest.post("http://localhost:3000/pet/add",pet);
  }

  getAllPets():Observable<any>{
    return this.httpRequest.get("http://localhost:3000/pet/All");
}

  getPet(ID:number):Observable<any>{
    return this.httpRequest.get(`http://localhost:3000/pet/${ID}`);
  }

  updatePet(pet:Pet,id:number):Observable<any>{
   return  this.httpRequest.put(`http://localhost:3000/pet/update/${id}`,pet);

  }

  deletePet(id:number):Observable<any>{
    return this.httpRequest.delete(`http://localhost:3000/pet/${id}`);
  }

}
