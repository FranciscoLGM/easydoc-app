import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Import components
import { HomeComponent } from './components/home/home.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { ListarPacientesComponent } from './components/listar-pacientes/listar-pacientes.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'listar-pacientes', component: ListarPacientesComponent },
  { path: 'crear-paciente', component: CrearPacienteComponent },
  { path: 'editar-paciente/:id', component: CrearPacienteComponent },
  { path: 'contact', component: ContactComponent },  
  { path: '**', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
