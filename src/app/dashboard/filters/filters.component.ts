import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HDD_SPEC_LIST, RAM_SPECS_LIST, STORAGE_DETAILS } from './filter-constants';


@Component({
  selector: 'lw-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  storageDetails = STORAGE_DETAILS;
  RAMList: string[] = RAM_SPECS_LIST;
  HDDList: string[] = HDD_SPEC_LIST;
  filterDetails = {
    storage: 0,
    ram: [],
    hdd: null,
    location: null
  };
  @Output() filterData = new EventEmitter<any>();
  @Input() locationList: string[];

  constructor() { }

  ngOnInit(): void {
  }

  updateFilter(): void
  {
    this.filterData.emit(this.filterDetails);
  }

  updateLocation(val): void {
    this.filterDetails.location = val;
    this.updateFilter();
  }

  updateHdd(val): void {
    this.filterDetails.hdd = val;
    this.updateFilter();
  }

  updateRam(): void
  {
    this.updateFilter();
  }

  handleSlider(val): void{
    this.filterDetails.storage = val.storage;
    this.updateFilter();
  }

  handleRamChange(val): void
  {
    this.filterDetails.ram = val.ram;
    this.updateFilter();
  }

  handleDropdownChange(val, key): void
  {
    this.filterDetails[key] = val;
    this.updateFilter();
  }

  resetFilters(): void
  {
    this.filterDetails = {
      storage: 0,
      ram: [],
      hdd: null,
      location: null
    };
    this.updateFilter();
  }
}
