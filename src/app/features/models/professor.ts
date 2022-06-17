export class Professor {
    nombre!: string;
    apellido!: string;
    legajo!: number;
    sueldo!: number;

    constructor(nombre: string, apellido: string, legajo: number, sueldo: number) {
        this.nombre = nombre
        this.apellido = apellido;
        this.legajo = legajo;
        this.sueldo = sueldo;
    }
}
