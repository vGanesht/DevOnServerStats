import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { RangeSelectorComponent } from './range-selector.component';

describe('RangeSelectorComponent', () => {
  let component: RangeSelectorComponent;
  let testComponent: RangeSelectorTestComponent;
  let fixture: ComponentFixture<RangeSelectorComponent>;
  let testfixture: ComponentFixture<RangeSelectorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeSelectorComponent ],
      providers: [
        { provide: MatDialog, useClass: class {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    testfixture = TestBed.createComponent(RangeSelectorTestComponent);
    fixture = TestBed.createComponent(RangeSelectorComponent);
    component = fixture.componentInstance;
    testComponent = testfixture.componentInstance;
    testfixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  template: `<shared-range-selector
    [storageDetails]="storageDetails"
    [selectedValue]="filterDetails?.storage"
     >
   </shared-range-selector>`
})
export class RangeSelectorTestComponent{
  storageDetails = ['0', '250GB', '500GB', '1TB', '2TB', '3TB', '4TB', '8TB', '12TB', '24TB', '48TB', '72TB'];
  selectedValue = '0';
}
