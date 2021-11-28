import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {
  listarPacientes: Paciente[] = [];

  constructor(private _pacienteService: PacienteService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obternerPacientes();
  }

  obternerPacientes() {
    this._pacienteService.getPacientes().subscribe(data => {
      console.log(data);
      this.listarPacientes = data;
    }, error => {
      console.log(error);
    });
  }
  eliminarPaciente(id: any) {
    this._pacienteService.eliminarPaciente(id).subscribe(data => {
      this.toastr.error('Paciente eliminado exitosamente', '¡Éxito!');
      this.obternerPacientes();
    }, error => {
      console.log(error);
    });

  }
}
