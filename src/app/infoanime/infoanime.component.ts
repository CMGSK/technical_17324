import { Component, OnInit } from '@angular/core';

import { Anime } from './infoanime.anime';
import { AnimeService } from './infoanime.animeservice';

@Component({
  selector: 'app-infoanime',
  providers: [AnimeService],
  templateUrl: './infoanime.component.html',
  styleUrls: ['./infoanime.component.css']
})
export class InfoanimeComponent implements OnInit {

  animes: Anime[];
  url: string = "https://kitsu.io/api/edge/anime";

  constructor( private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getAnimes(this.url)
      .then(animes => this.animes = animes);
  }

}
