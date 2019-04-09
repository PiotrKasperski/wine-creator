import {Component} from '@angular/core';
import {MatDialog} from "@angular/material";

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wine-creator';
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {
  }


}
