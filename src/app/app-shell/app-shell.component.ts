import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'efn-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
})
export class AppShellComponent implements OnInit {
  private name;

  constructor() {
    this.name = 'app-shell-component';
  }

  ngOnInit(): void {
    console.log(`${this.name} init`);
  }
}
