import { Gif } from "../interfaces/gif";
import { giphyItem } from "../interfaces/giphpy";

export class gifMapper {
  static mapGiphyItemToGif( item: giphyItem ): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url
    };
  }

  static mapGiphyItemsToGifArray (items: giphyItem[]): Gif[] {
    return items.map( this.mapGiphyItemToGif );

  }
}
//todo es nuevo
