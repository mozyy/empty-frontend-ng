import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ParamsList, SourceService } from '../../../../../grpc/manage/source.service';

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
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ParamsList,
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
    return this.form.controls['menu'] as FormControl;
  }

  onSubmit() {
    console.log(this.form);
    const { valid, value } = this.form;
    if (valid) {
      if (value.id) {
        this.sourceService.update(value).subscribe((resp) => {
          console.log(resp);
        });
      } else {
        this.sourceService.create(value).subscribe();
      }
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
