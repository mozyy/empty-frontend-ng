import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateRequest, Resource, UpdateRequest } from '../../../../../../proto/system/resource/v1/resource_pb';
import { SourceService } from '../../../../../grpc/manage/source.service';

@Component({
  selector: 'efn-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent {
  form = this.fb.group({
    ...this.data,
  });

  constructor(
    private dialogRef: MatDialogRef<EditDialogComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) private data: Resource.AsObject,
    private fb:FormBuilder,
    private sourceService: SourceService,
  ) {
    console.log(11111111, 'edit');
  }

  get title() {
    if (this.data.id) {
      return '编辑';
    }
    return '新建';
  }

  get menuContarl() {
    return this.form.controls.menu;
  }

  onSubmit() {
    console.log(this.form);
    const { valid, value } = this.form;
    if (valid) {
      const resource = new Resource();
      resource.setResourceItemid(value.resourceItemid || 0);
      resource.setKey(value.key || '');
      resource.setType(value.type || 0);
      resource.setIndex(value.index || false);
      resource.setPath(value.path || '');
      resource.setName(value.name || '');
      resource.setMenu(value.menu || false);
      resource.setIcon(value.icon || '');
      resource.setDesc(value.desc || '');
      if (value.id) {
        resource.setId(value.id);
        const req = new UpdateRequest();
        req.setResource(resource);
        this.sourceService.update(req).subscribe((resp) => {
          this.close(true);
        });
      } else {
        const req = new CreateRequest();
        req.setResource(resource);
        this.sourceService.create(req).subscribe(() => {
          this.close(true);
        });
      }
    }
  }

  close(refresh?:boolean): void {
    this.dialogRef.close(refresh);
  }
}
