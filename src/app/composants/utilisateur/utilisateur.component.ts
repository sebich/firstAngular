import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  nom: string;
  age: number;
  email: string;
  hobby: hobby;

  constructor() {
    this.nom = 'Séb';
    this.age = 25;
    this.email = 'seb@mail.com';
    this.hobby = {
      hobbyUn: 'Basket',
      hobbyDeux: 'Lecture',
      hobbyTrois: 'Programmation'
    };

   }

  ngOnInit() { }

}

interface hobby {
  hobbyUn: string;
  hobbyDeux: string;
  hobbyTrois: string;
}

