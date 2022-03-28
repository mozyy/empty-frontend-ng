import { Component, Input } from '@angular/core';
import { SourcesItem } from 'src/proto/manage/sources_pb';

@Component({
  selector: 'efn-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() routers:SourcesItem[] = [];
}
