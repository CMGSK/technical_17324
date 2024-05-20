import { Component, OnInit, ViewChild } from '@angular/core';

import { Anime } from './infoanime.anime';
import { AnimeService } from './infoanime.animeservice';
import { Table } from 'primeng/table';

// Creamos una constante para la URL que usaremos para traer datos
// En este caso es la API de Kitsu, una API gratuita de informacion de Animes
const url = "https://kitsu.io/api/edge/anime?page[offset]=";

@Component({
  selector: 'app-infoanime',
  providers: [AnimeService],
  templateUrl: './infoanime.component.html',
  styleUrls: ['./infoanime.component.css']
})

export class InfoanimeComponent implements OnInit {

  // Creamos un alias para la tabla
  @ViewChild('dt') table: Table;

  // Creamos un array de objetos Anime que mostraremos en la tabla
  animes: Anime[];

  // Para que funcione el descargar PDF.
  columns: any[];

  constructor( private animeService: AnimeService) { }

  ngOnInit(): void {
    // Le asignamos un offset aleatorio tanto para variar los datos 
    // como para ver que el refresh funciona correctamente
    let rnd = Math.random() * 990; 

    // Hacemos la peticion y le asignamos el parseo de su respuesta a nuestro array
    this.animeService.getAnimes(`${url}${rnd}`)
      .then(animes => this.animes = animes);
  }

  // En este caso, para refrescar la tabla, como no tenemos nada mas, podemos llamar
  // a la funcion onInit, que reemplazara los datos de nuestra tabla actual cuando parsee la respuesta
  refreshTable(){
    this.ngOnInit();
  }

  // No se por que no anade los header de las columnas :(
  downloadPDF(){
    import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
          const doc = new jsPDF.default();
          (doc as any).autoTable(this.columns, this.animes);
          doc.save('anime_table.pdf');
      });
    });
  }

}
