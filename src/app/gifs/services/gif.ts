import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import type { GiphyResponse } from '../interfaces/giphpy';
import { Gif } from '../interfaces/gif';
import { gifMapper } from '../mapper/gif';

@Injectable({
  providedIn: 'root'
})
export class gifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  constructor(){
    this.loadTrendingGifs();
  }




  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key:environment.giphyApiKey,
        limit:20
      },
    }).subscribe((resp)=>{
      //cambio
      const gifs = gifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log({gifs});
        });
   }

}
