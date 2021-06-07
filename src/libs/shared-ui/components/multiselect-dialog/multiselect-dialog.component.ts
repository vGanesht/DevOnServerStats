import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'lw-multiselect-dialog',
  templateUrl: './multiselect-dialog.component.html',
  styleUrls: ['./multiselect-dialog.component.scss']
})
export class MultiselectDialogComponent implements OnInit {
  list = [];
  selectedValues = [];
  constructor(
    public dialogRef: MatDialogRef<MultiselectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.list = this.data.list;
    this.selectedValues = this.data.selectedvalue;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  saveSelectedItems(): void
  {
    this.dialogRef.close({ ram: this.selectedValues });
  }
}
