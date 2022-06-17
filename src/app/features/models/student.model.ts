export class Student {
    nombre!: string;
    apellido!: string;
    legajo!: number;
    nota!: number;

    constructor(nombre: string, apellido: string, legajo: number, nota: number) {
        this.nombre = nombre
        this.apellido = apellido;
        this.legajo = legajo;
        this.nota = nota;
    }
}
