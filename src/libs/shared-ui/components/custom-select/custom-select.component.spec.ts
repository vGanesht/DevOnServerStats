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
  template: `<lw-custom-select
      [label]="testLabel"
      [list]="testList"
      [selectedValue]="filterDetails?.hdd" >
    </lw-custom-select>`
})
export class RangeSelectorTestComponent{
  testLabel = 'Select Data';
  testList = ['SAS', 'SATA', 'SSD'];
  selectedValue = 'SAS';
}
