import { Auto } from './../../clases/auto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-autos',
  templateUrl: './tabla-autos.component.html',
  styleUrls: ['./tabla-autos.component.css']
})
export class TablaAutosComponent implements OnInit {
  @Input() listado: Array<Auto>;
  constructor() { }

  ngOnInit() {
  }

}
