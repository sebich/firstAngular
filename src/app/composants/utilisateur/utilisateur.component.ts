import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../../services/donnees.service';

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

  constructor(private donnees: DonneesService) {
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

  onClick() {
    alert('Aucune information supplémentaire pour le moment !');
  }

}

// tslint:disable-next-line: class-name
interface hobby {
  hobbyUn: string;
  hobbyDeux: string;
  hobbyTrois: string;
}

