import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss']
})
export class MensagensComponent implements OnInit {

  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar() {
    this._snackBar.openFromComponent(MensagensComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }


  ngOnInit(): void {
  }

}
