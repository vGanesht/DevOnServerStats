import { Component, EventEmitter, Input, OnChanges, OnInit, Output, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MultiselectDialogComponent } from '../multiselect-dialog/multiselect-dialog.component';

@Component({
  selector: 'shared-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit ,OnChanges{
  @Input() label:any;
  @Input() list:any;
  @Input() selectedValue:any;
  @Output() selected =new EventEmitter<any>();
  Currentlabel='Select HDD';
  popupopen=false;
  constructor(public dialog: MatDialog) { }
  
  ngOnChanges(): void {
   if(!this.selectedValue || this.selectedValue =='')
    {
      this.Currentlabel=this.label;
    }
    else{
      this.Currentlabel=this.selectedValue;
    }
  }

  ngOnInit(): void {
  }
  updateValue(hdd){
    this.selectedValue=hdd;
    this.selected.emit(this.selectedValue);
  }

}
