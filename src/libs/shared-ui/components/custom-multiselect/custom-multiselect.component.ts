import { Component, EventEmitter, Input, OnChanges, OnInit, Output, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MultiselectDialogComponent } from '../multiselect-dialog/multiselect-dialog.component';

@Component({
  selector: 'shared-custom-multiselect',
  templateUrl: './custom-multiselect.component.html',
  styleUrls: ['./custom-multiselect.component.scss']
})
export class CustomMultiselectComponent implements OnInit , OnChanges{
  @Input() ramList: any;
  @Input() selectedValue: any;
  @Output() selectedRam = new EventEmitter<any>();
  label = 'Select RAM';
  popupopen = false;
  constructor(public dialog: MatDialog) { }

  ngOnChanges(): void {

    if (!this.selectedValue || this.selectedValue === '')
    {
      this.label = 'Select RAM';
    }
    else{
      this.label = this.selectedValue.join(',');
    }
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.popupopen = true;
    const dialogRef = this.dialog.open(MultiselectDialogComponent,
      {
        data: {list: this.ramList, selectedvalue: this.selectedValue}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.popupopen = false;
      if (result)
      {
        this.label = (result.ram && result.ram.length > 0) ? result.ram.join(',') : 'Select Ram';
        this.selectedRam.emit(result);
      }
    });
  }

}
