import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  url = 'https://easydoc-backend.herokuapp.com/api/pacientes/';

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<any> {
    return this.http.get(this.url);  // Retorna um Observable
  }
  eliminarPaciente(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  crearPaciente(paciente: Paciente): Observable<any> {
    return this.http.post(this.url, paciente);
  }
  obternerPaciente(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  editarPaciente(id: string, paciente: Paciente): Observable<any> {
    return this.http.put(this.url + id, paciente);
  }
}
