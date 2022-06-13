import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { DeleteRequest, ListRequest, Resource } from '../../../../proto/system/resource/v1/resource_pb';
import { ModalService } from '../../../components/modal/modal.service';
import { ResourceService } from '../../../grpc/system/resource.service';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

interface FlatNode extends Resource.AsObject {
  expandable: boolean;
  level: number;
}

@Component({
  selector: 'efn-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
})
export class ResourceComponent implements OnInit {
  // treeControl = new NestedTreeControl<SourcesItem.AsObject>((node) => node.childrenList);

  private transformer = (node: Resource.AsObject, level: number) => ({
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

  sources:Resource.AsObject[] = [];

  constructor(
    private sourceService: ResourceService,
    private dialog: MatDialog,
    private modal: ModalService,
  ) { }

  ngOnInit(): void {
    this.getSource();
  }

  getSource() {
    this.sourceService.sourcesTree(new ListRequest())
      .subscribe((resp) => this.dataSource.data = resp);
  }

  add(node: FlatNode) {
    const resource = new Resource();
    resource.setResourceItemid(node.id);
    this.openDialog(resource.toObject());
  }

  edit(node:FlatNode) {
    this.openDialog({ ...node });
  }

  delete(node: FlatNode) {
    this.modal.open({ content: '确定删除？' }).afterClosed().subscribe(() => {
      const req = new DeleteRequest();
      const resource = new Resource();
      resource.setId(node.id);
      resource.setResourceItemid(node.resourceItemid);
      resource.setKey(node.key);
      resource.setType(node.type);
      resource.setIndex(node.index);
      resource.setPath(node.path);
      resource.setName(node.name);
      resource.setMenu(node.menu);
      resource.setIcon(node.icon);
      resource.setDesc(node.desc);
      req.setResource(resource);
      this.sourceService.delete(req).subscribe(() => {
        this.sourceService.refresh();
      });
    });
  }

  openDialog(data: Resource.AsObject): void {
    const dialogRef = this.dialog.open<EditDialogComponent,
    Resource.AsObject, boolean>(EditDialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sourceService.refresh();
      }
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
