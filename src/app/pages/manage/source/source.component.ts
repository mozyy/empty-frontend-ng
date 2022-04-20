import { Component, OnInit } from '@angular/core';
import { SourcesItem } from '../../../../proto/manage/sources_pb';
import { SourceService } from '../../../grpc/manage/source.service';

@Component({
  selector: 'efn-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss'],
})
export class SourceComponent implements OnInit {
  params: Partial<SourcesItem.AsObject> = {};

  displayedColumns: (keyof SourcesItem.AsObject)[] = ['id', 'key', 'name', 'desc'];

  sources:SourcesItem.AsObject[] = [];

  constructor(private sourceService: SourceService) { }

  ngOnInit(): void {
    this.getSource();
  }

  getSource() {
    this.sourceService.getSource(this.params).subscribe((resp) => this.sources = resp);
  }
}
