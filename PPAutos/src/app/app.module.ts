import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaAutosComponent } from './componentes/tabla-autos/tabla-autos.component';
import { FormularioAutoComponent } from './componentes/formulario-auto/formulario-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaAutosComponent,
    FormularioAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
