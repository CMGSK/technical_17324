import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'

import { Anime } from './infoanime.anime';

@Injectable()
export class AnimeService {

    constructor (private http: HttpClient) {}

    getAnimes(url: string): Promise<Anime[]> {
        return fetch(url)
            .then(res => res.json())
            .then(res => {
                let animes = res['data'].map( anime => {
                    return {
                        id: anime['id'],
                        name: anime['attributes']['slug'],
                        date: anime['attributes']['startDate'],
                        rating: anime['attributes']['averageRating']
                    }
                });
                return animes;
            });
    }
}