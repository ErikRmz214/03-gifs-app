import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListItem } from "./list-item/list-item";

@Component({
  selector: 'gifs-list',
  imports: [ListItem],
  templateUrl: './list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class List { }
