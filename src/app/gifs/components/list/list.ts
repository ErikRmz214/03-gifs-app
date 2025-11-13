import { Component, input } from '@angular/core';
import { ListItem } from "./list-item/list-item";

@Component({
  selector: 'gifs-list',
  imports: [ListItem],
  templateUrl: './list.html',
})
export class List {

  // TODO: input String [];
gifs = input.required<string[]>();


}
