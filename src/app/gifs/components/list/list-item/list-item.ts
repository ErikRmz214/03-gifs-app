import { Component, input } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './list-item.html',
})
export class ListItem {

  //TODO: ImageUrls:String;
  
  imageUrl = input.required<string>();
}
