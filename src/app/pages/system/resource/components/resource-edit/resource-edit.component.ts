import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ɵElement } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateRequest, Resource, UpdateRequest } from '../../../../../../proto/system/resource/v1/resource_pb';
import { ResourceService } from '../../../../../grpc/system/resource.service';
import { FormGroupBuilder } from '../../../../../utils/types';

@Component({
  selector: 'efn-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.scss'],
})
export class ResourceEditComponent {
  form: FormGroupBuilder<Resource.AsObject>;

  constructor(
    private dialogRef: MatDialogRef<ResourceEditComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) data: Resource.AsObject,
    fb:FormBuilder,
    private resourceService: ResourceService,
  ) {
    this.form = fb.group(data);
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
        this.resourceService.update(req).subscribe((resp) => {
          this.close(true);
        });
      } else {
        const req = new CreateRequest();
        req.setResource(resource);
        this.resourceService.create(req).subscribe(() => {
          this.close(true);
        });
      }
    }
  }

  close(refresh?:boolean): void {
    this.dialogRef.close(refresh);
  }
}
