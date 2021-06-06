import { Component, Input, OnInit, Output, } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'lw-range-dialog',
  templateUrl: './range-dialog.component.html',
  styleUrls: ['./range-dialog.component.scss']
})
export class RangeDialogComponent implements OnInit {
  storageDetails = [];
  storage = 0;
  sliderValue = 0;
  constructor(
    public dialogRef: MatDialogRef<RangeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.storageDetails = this.data.storageDetails;
    this.storage = this.data.selectedvalue;
    this.sliderValue = this.data.selectedvalue !== 0 ?
           Math.floor(this.storageDetails.indexOf(this.data.selectedvalue) * 100 / this.storageDetails.length)
           : 0;
  }


  selectSlider(event: any): void {
    const test = Math.floor(((this.storageDetails.length - 1) * event) / 100) ;
    this.storage = this.storageDetails[test];
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveStorage(): void
  {
    this.dialogRef.close({ storage: this.storage });
  }
}
