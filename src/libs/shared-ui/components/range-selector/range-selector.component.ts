import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RangeDialogComponent } from '../range-dialog/range-dialog.component';

@Component({
  selector: 'shared-range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['./range-selector.component.scss']
})
export class RangeSelectorComponent implements OnInit {
  @Input() storageDetails:any;
  @Input() selectedValue:any;
  @Output() selectedStorage =new EventEmitter<any>();
  storageLabel='Storage Range';
  popupopen=false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  ngOnChanges(): void {
    debugger;
   if(!this.selectedValue || this.selectedValue =='')
    {
      this.storageLabel='Storage Range';
    }
    else{
      this.storageLabel=this.selectedValue;
    }
  }
  openDialog() {
    debugger;
    this.popupopen=true;
    const dialogRef = this.dialog.open(RangeDialogComponent,
      {
        data: {storageDetails:this.storageDetails, selectedvalue:this.selectedValue}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.popupopen=false;
      if(result)
      {
        this.storageLabel=result['storage'];
        this.selectedStorage.emit(result);
      }
    });
  }

}
