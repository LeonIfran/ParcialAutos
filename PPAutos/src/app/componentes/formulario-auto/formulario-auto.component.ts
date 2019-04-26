import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-formulario-auto',
  templateUrl: './formulario-auto.component.html',
  styleUrls: ['./formulario-auto.component.css']
})
export class FormularioAutoComponent implements OnInit {
  formularioAuto: FormGroup;
  constructor() { }

  ngOnInit() {
    this.formularioAuto = new FormGroup({
      /*b. modelo,
      c. marca,
      d. Precio
      e. cantidadPuertas:{tres o cinco}
      f. RutaDeFoto*/
    modelo: new FormControl(),
    marca: new FormControl(),
    precio: new FormControl(),
    cantidadPuertas: new FormControl(),
    RutaDeFoto: new FormControl()

    });
  }

}
