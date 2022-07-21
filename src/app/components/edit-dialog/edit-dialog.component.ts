import {
  Component, Input,
} from '@angular/core';

@Component({
  selector: 'efn-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent {
  @Input() edit = false;

  title = this.edit ? '新增' : '编辑';
}
