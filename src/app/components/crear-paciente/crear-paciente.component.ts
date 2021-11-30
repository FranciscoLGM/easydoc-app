import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {
  pacienteForm: FormGroup;
  titulo = 'Crear Paciente';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _pacienteService: PacienteService, private aRoute: ActivatedRoute) {
    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.esEditar();
  }

  crearPaciente() {
    const paciente: Paciente = {
      nombre: this.pacienteForm.get('nombre')?.value,
      apellido: this.pacienteForm.get('apellido')?.value,
      genero: this.pacienteForm.get('genero')?.value,
      email: this.pacienteForm.get('email')?.value,
      telefono: this.pacienteForm.get('telefono')?.value,
      usuario: this.pacienteForm.get('usuario')?.value,
      password: this.pacienteForm.get('password')?.value,
    };
    if (this.id != null) {
      // editar paciente
      this._pacienteService.editarPaciente(this.id, paciente).subscribe(data => {
        this.toastr.info('Paciente editado exitosamente', '¡Éxito!');
        this.router.navigate(['/listar-pacientes']);
      }, error => {
        this.toastr.error('Error al editar paciente', '¡Error!');
        this.pacienteForm.reset();
      });
    } else {
      // crear paciente
      console.log(paciente);
      this._pacienteService.crearPaciente(paciente).subscribe(data => {
        this.toastr.success('Paciente registrado exitosamente', '¡Éxito!');
        this.router.navigate(['/listar-pacientes']);
      }, error => {
        console.log(error);
        this.toastr.error('Error al registrar paciente', '¡Error!');
        this.pacienteForm.reset();
      });
    }
  }
  esEditar() {
    if (this.id != null) {
      this.titulo = 'Editar Paciente';
      this._pacienteService.obternerPaciente(this.id).subscribe(data => {
        this.pacienteForm.setValue({
          nombre: data.nombre,
          apellido: data.apellido,
          genero: data.genero,
          email: data.email,
          telefono: data.telefono,
          usuario: data.usuario,
          password: data.password,
        });
      });
    }
  }
}
