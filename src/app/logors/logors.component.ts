import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-logors',
  standalone: true,
  imports: [MatCardModule,MatIconModule,CommonModule],
  templateUrl: './logors.component.html',
  styleUrl: './logors.component.css'
})
export class LogorsComponent {

  constructor() { }

  logros = [
    {
      title: 'Point sale',
      description: 'construcción de poin sale personalizado para la tienda'
    },
    {
      title: 'IA',
      description: 'Crear una IA de recomendación de productos'
    }
  ]
}
