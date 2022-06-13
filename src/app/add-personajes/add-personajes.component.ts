import { Component, OnInit } from '@angular/core';
import { Personajes } from '../models/personajes.model';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-add-personajes',
  templateUrl: './add-personajes.component.html',
  styleUrls: ['./add-personajes.component.css']
})
export class AddPersonajesComponent implements OnInit {

  Personajes: Personajes ={
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    image: ''
  }
  submitted = false;

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
  }

  savePersonaje(): void{
    const data = {
      name: this.Personajes.name,
      status: this.Personajes.status,
      species: this.Personajes.species,
      gender: this.Personajes.gender,
      origin: this.Personajes.origin,
      location: this.Personajes.location,
      image: this.Personajes.image
    };

    this.personajesService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  newPersonaje(): void{
    this.submitted = false;
    this.Personajes = {
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      location: '',
      image: ''
    };
  }

}
