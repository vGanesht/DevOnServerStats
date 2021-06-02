import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HDD_SPEC_LIST, RAM_SPECS_LIST, STORAGE_DETAILS } from './filter-constants';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  storageDetails=STORAGE_DETAILS;
  // toppings = new FormControl();
  RAMList: string[] = RAM_SPECS_LIST;
  HDDList:string[]=HDD_SPEC_LIST;
  someValue ="";

  filterDetails={
    storage:0,
    ram:[],
    hdd:null,
    location:null
  }
  @Output() filterData =new EventEmitter<any>();
  @Input() locationList:string[];
  

  constructor() { }

  ngOnInit(): void {
  }

  updateFilter()
  {
    this.filterData.emit(this.filterDetails);
  }

  updateLocation(val){
    this.filterDetails.location=val;
    this.updateFilter();
  }

  updateHdd(val){
    this.filterDetails.hdd=val;
    this.updateFilter();
  }
  updateRam()
  {
    this.updateFilter();
  }
  handleSlider(val){
    this.filterDetails.storage=val.storage;
    this.updateFilter();
  }
  handleRamChange(val)
  {
    this.filterDetails.ram=val.ram;
    this.updateFilter();
  }
  resetFilters()
  {
    this.filterDetails={
      storage:0,
      ram:[],
      hdd:null,
      location:null
    }
    this.updateFilter();
  }
}
