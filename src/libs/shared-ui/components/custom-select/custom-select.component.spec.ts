import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';

import { CustomSelectComponent } from './custom-select.component';

describe('CustomSelectComponent', () => {
  let component: CustomSelectComponent;
  let fixture: ComponentFixture<CustomSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [ CustomSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
@Component({
  template: `<shared-custom-select
      [label]="testLabel"
      [list]="Test_LIST"
      [selectedValue]="filterDetails?.hdd" >
    </shared-custom-select>`
})
export class RangeSelectorTestComponent{
  testLabel="Select Data"
  Test_LIST=['SAS', 'SATA', 'SSD'];
  selectedValue='SAS';
}
