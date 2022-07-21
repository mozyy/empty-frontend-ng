import {
  AfterViewInit, Component, OnInit, ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListRequest, Role } from '../../../../proto/system/role/v1/role_pb';
import { RoleService } from '../../../grpc/system/role.service';

@Component({
  selector: 'efn-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit, AfterViewInit {
  displayedColumns: string[];

  dataSource:MatTableDataSource<Role.AsObject>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private client: RoleService,
  ) {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.dataSource = new MatTableDataSource<Role.AsObject>([]);
  }

  ngOnInit(): void {
    this.client.list(new ListRequest()).subscribe((resp) => {
      this.dataSource.data = resp.listList;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getRoles() {

  }

  addData() {

  }
}
