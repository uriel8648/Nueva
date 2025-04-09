import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Shared Module
 * 
 * This module contains components, directives and pipes that are shared across
 * multiple feature modules in the application.
 * 
 * It exports CommonModule, FormsModule, and ReactiveFormsModule by default
 * so they don't need to be imported individually in feature modules.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
