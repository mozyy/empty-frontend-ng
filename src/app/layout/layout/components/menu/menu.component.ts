import { Component, Input } from '@angular/core';
import { Resource } from '../../../../../proto/system/resource/v1/resource_pb';

@Component({
  selector: 'efn-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() routers:Resource.AsObject[] = [];
}
