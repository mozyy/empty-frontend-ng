import { Component, Input } from '@angular/core';
import { Resource as ResourceItem } from '../../../../openapi/resources';

export interface Resource extends ResourceItem {
  childrenList: Resource[]
}

@Component({
  selector: 'efn-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() routers:Resource[] = [];
}
