import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { DataFormComponent } from './data-form.component';


@NgModule({
  imports: [
    ReactiveFormsModule, FormsModule, CommonModule, HttpModule, SharedModule
  ],
  declarations: [DataFormComponent]
})
export class DataFormModule { }
