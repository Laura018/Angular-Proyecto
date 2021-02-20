import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  name:string;
  career:string;
  age:number;
  university:string;
  constructor() { 
    this.name="Laura Ramírez";
    this.career="Ingeniería de sistemas"
    this.age=19;
    this.university="Universidad Distrital Francisco José de Caldas"


  }

  ngOnInit(): void {
  }

}
