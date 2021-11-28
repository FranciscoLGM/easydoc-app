export class Paciente {
    _id?: number;
    nombre: string;
    apellido: string;
    genero: string;
    email: string;
    telefono: string;
    usuario: string;
    password: string;

    constructor(nombre: string, apellido: string, genero: string, email: string, telefono: string, usuario: string, password: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.genero = genero;
        this.email = email;
        this.telefono = telefono;
        this.usuario = usuario;
        this.password = password;
    }
}
