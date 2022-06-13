import { Component, OnInit } from "@angular/core";
import { Personajes } from "../models/personajes.model";
import { PersonajesService } from "../services/personajes.service";


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent implements OnInit{

  personajes?: Personajes[];
  currentPersonajes: Personajes = {};
  currentIndex = -1;
  name = '';

  constructor(private personajesService: PersonajesService){}

  ngOnInit(): void {
    this.retrievePersonajes();
  }

  retrievePersonajes(): void{
    this.personajesService.getAll()
      .subscribe(
        data => {
          this.personajes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshPersonajes(): void{
    this.retrievePersonajes();
    this.currentPersonajes = {};
    this.currentIndex = -1;
  }

  setActivePersonajes(personajes: Personajes, index: number): void{
    this.currentPersonajes = personajes;
    this.currentIndex = index;
  }

  removeAllPersonajes(): void{
    this.personajesService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshPersonajes();
        },
        error => {
          console.log(error);
        });
  }



}
