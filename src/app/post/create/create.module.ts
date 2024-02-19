import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importez ReactiveFormsModule

import { CreateComponent } from './create.component';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule // Ajoutez ReactiveFormsModule aux imports
  ]
})
export class CreateModule { }
