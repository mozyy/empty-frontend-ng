import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { SourcesItem } from '../../../../proto/manage/sources_pb';
import { ParamsList, SourceService } from '../../../grpc/manage/source.service';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

interface FlatNode extends SourcesItem.AsObject {
  expandable: boolean;
  level: number;
}

@Component({
  selector: 'efn-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss'],
})
export class SourceComponent implements OnInit {
  params: ParamsList = new SourcesItem().toObject();

  // treeControl = new NestedTreeControl<SourcesItem.AsObject>((node) => node.childrenList);

  private transformer = (node: SourcesItem.AsObject, level: number) => ({
    expandable: !!node.childrenList && node.childrenList.length > 0,
    level,
    ...node,
  });

  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.childrenList,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  sources:SourcesItem.AsObject[] = [];

  constructor(private sourceService: SourceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSource();
  }

  getSource() {
    this.sourceService.list(this.params).subscribe((resp) => this.sources = resp);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open<EditDialogComponent, ParamsList>(EditDialogComponent, {
      data: this.params,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
}
