import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-view',
  templateUrl: './dynamic-view.component.html',
  styleUrls: ['./dynamic-view.component.css']
})
export class DynamicViewComponent implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtén el ID de los parámetros de la ruta
    const idParam = this.route.snapshot.paramMap.get('id');

    // Asigna idParam a id solo si idParam no es null
    if (idParam !== null) {
      this.id = idParam;
    } else {
      // Manejar el caso en que el ID no está presente
      console.error('ID no encontrado en la ruta.');
    }
  }
}
