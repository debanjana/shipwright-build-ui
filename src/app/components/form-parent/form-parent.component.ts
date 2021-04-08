import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProgressDialogComponent } from '../progress-dialog/progress-dialog.component';

@Component({
  selector: 'app-form-parent',
  templateUrl: './form-parent.component.html',
  styleUrls: ['./form-parent.component.css']
})
export class FormParentComponent implements OnInit {
  githubUrl = new FormControl('');
  dockerFilePath = new FormControl('');
  buildStrategy = new FormControl();
  buildStrategies: string[] = ['BuildPacks', 'Kaniko', 'Buildha'];

  status = "progress"

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  buildForm(): void {
    const dialogRef = this.dialog.open(ProgressDialogComponent, {
      width: '650px',
      data: {status: this.status}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.status = result;
    });
  }


}
