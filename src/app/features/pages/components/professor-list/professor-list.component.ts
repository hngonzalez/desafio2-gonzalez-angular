import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/features/models/professor';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {
  professorList: Professor[] = [];

  constructor() { }

  ngOnInit(): void {
    let professor1 = new Professor('Anahí', 'Wex', 156443, 8555);
    let professor2 = new Professor('Laura', 'Martinez', 223433, 9222);
    let professor3 = new Professor('Osvaldo', 'Laurens', 121633, 123546);
    let professor4 = new Professor('Paula', 'Portobello', 213388, 3432);
    
    this.professorList.push(professor1, professor2, professor3, professor4);
  }

}
