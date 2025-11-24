import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import type { GiphyResponse } from '../interfaces/giphpy';

@Injectable({
  providedIn: 'root'
})
export class gifService {

  private http = inject(HttpClient);

  constructor(){
    this.loadTrendingGifs;
  }




  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key:environment.giphyApiKey,
        limit:15
      },
    });
   }

}
