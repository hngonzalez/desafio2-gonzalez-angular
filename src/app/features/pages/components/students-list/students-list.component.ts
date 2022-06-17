import { Component, OnInit } from '@angular/core';

import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  studentsList: Student[] = [];

  constructor() { }

  ngOnInit(): void {
    let alumno1 = new Student('Matías', 'Gimenez', 156443, 8);
    let alumno2 = new Student('Laura', 'Wex', 223433, 9);
    let alumno3 = new Student('Ricardo', 'Laurens', 121633, 6);
    let alumno4 = new Student('Paula', 'Portobello', 213388, 3);
    
    this.studentsList.push(alumno1, alumno2, alumno3, alumno4);
  }

}
