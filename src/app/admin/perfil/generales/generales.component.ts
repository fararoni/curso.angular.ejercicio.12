import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import {FormControl, FormGroup} from  '@angular/forms';
import {FormBuilder} from  '@angular/forms';

@Component({
  selector: 'app-generales',
  standalone: true,
  imports: [ReactiveFormsModule  ],
  templateUrl: './generales.component.html',
  styleUrl: './generales.component.css'
})
export class GeneralesComponent {
  /*
  generalesForm = new FormGroup({
    nombre :  new FormControl(''),
    email :   new FormControl(''),
    edad : new FormControl(''),
    domicilio : new FormControl(''),
    telefono : new FormControl(''),
  });
  */
    generalesForm = this.formBuilder.group({
      nombre: [''],
      email: [''],
      edad: [''],
      domicilio: [''],
      telefono: [''],
    });

    constructor(private formBuilder: FormBuilder) {

    }
  actualizarNombre() {
    this.generalesForm.patchValue( {nombre : 'xxx' } );
    // this.generalesForm.setValue
  }

  onSubmit() {
    // TODO: Usar EventEmitter para notificar este resultado fuera del componente
    console.log(this.generalesForm.value);
  }
}
