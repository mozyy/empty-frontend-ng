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
    this.sourceService.list(this.params).subscribe((resp) => this.dataSource.data = resp);
  }

  add(node: FlatNode) {
    const sourcesItemid = node.id;
    const item = new SourcesItem().toObject();
    this.openDialog({ ...item, sourcesItemid });
  }

  edit(node:FlatNode) {
    this.openDialog({ ...node });
  }

  openDialog(data: SourcesItem.AsObject): void {
    const dialogRef = this.dialog.open<EditDialogComponent,
    ParamsList>(EditDialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  getLevel = (node: FlatNode) => node.level;

  getParentNode(node: FlatNode): FlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i -= 1) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  hasContent() {
    return false;
  }

  hasChild(i: number, node: FlatNode) {
    return node.expandable;
  }

  drop(event: any) {
    console.log(event);
  }
}
