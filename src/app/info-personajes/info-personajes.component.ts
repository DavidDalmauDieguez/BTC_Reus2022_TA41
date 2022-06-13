import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personajes } from '../models/personajes.model';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-info-personajes',
  templateUrl: './info-personajes.component.html',
  styleUrls: ['./info-personajes.component.css']
})
export class InfoPersonajesComponent implements OnInit {

  currentPersonajes: Personajes ={
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    image: ''
  };
  message = '';

    constructor(
      private personajesService: PersonajesService,
      private route: ActivatedRoute,
      private router: Router){}

    ngOnInit(): void{
      this.message = '';
      this.getPersonajes(this.route.snapshot.params.id);
    }

    getPersonajes(id: string): void{
      this.personajesService.get(id)
        .subscribe(
          data => {
            this.currentPersonajes = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    updatePublished(status: boolean): void {
      const data = {
        name: this.currentPersonajes.name,
        status: this.currentPersonajes.status,
        species: this.currentPersonajes.species,
        gender: this.currentPersonajes.gender,
        origin: this.currentPersonajes.origin,
        location: this.currentPersonajes.location,
        image: this.currentPersonajes.image};
        this.message = '';

        this.personajesService.update(this.currentPersonajes.id, data)
          .subscribe(
            response => {
              this.currentPersonajes.published = status;
              console.log(response);
              this.message = response.message ? response.message : ' The status was updated successfully!';
            },
            error => {
              console.log(error);
            })
    }

    deletePersonajes(): void{
      this.personajesService.delete(this.currentPersonajes.id)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/personajes']);
          },
          error => {
            console.log(error);
          });
    }
  }


