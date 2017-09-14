import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { DropdownService } from './dropdown.service';



@NgModule({
  imports: [
    CommonModule, HttpModule,    FormsModule, 
    ReactiveFormsModule   
  ],
  declarations: [FormDebugComponent, CampoControlErroComponent],
  exports: [CommonModule, HttpModule,    FormsModule, 
    ReactiveFormsModule, FormDebugComponent, CampoControlErroComponent],
  providers:[DropdownService]

})
export class SharedModule { }
