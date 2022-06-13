import {
  AfterViewInit, Component, ViewEncapsulation,
} from '@angular/core';
// @ts-ignore
import swaggerUI from 'swagger-ui-dist/swagger-ui-bundle';
// @ts-ignore
import SwaggerUIStandalonePreset from 'swagger-ui-dist/swagger-ui-standalone-preset';

@Component({
  selector: 'efn-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DocsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const files = [
      'manage/sources',
      'news/news',
      'user/user',

      'common/message',
      'conf/conf',
      'model/conf',
      'model/user',
      'sms/sms',
    ];
    const { origin } = window.location;
    swaggerUI({
      dom_id: '#openapi-ui',
      urls: files.map((file) => ({ url: `${origin}/assets/proto/${file}.swagger.json`, name: file })),
      plugins: [
        swaggerUI.plugins.DownloadUrl,
      ],
      presets: [
        swaggerUI.presets.apis,
        SwaggerUIStandalonePreset,
      ],
      layout: 'StandaloneLayout',
    });
  }
}
