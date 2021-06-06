import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { CustomMultiselectComponent } from './custom-multiselect.component';

describe('CustomMultiselectComponent', () => {
  let component: CustomMultiselectComponent;
  let testComponent: TestComponent;
  let fixture: ComponentFixture<CustomMultiselectComponent>;
  let testfixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMultiselectComponent ],
      providers: [
        { provide: MatDialog, useClass: class {} },
        { provide: MatDialogRef, useClass: class {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    testfixture = TestBed.createComponent(TestComponent);
    fixture = TestBed.createComponent(CustomMultiselectComponent);
    component = fixture.componentInstance;
    testComponent = testfixture.componentInstance;
    testfixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
@Component({
  template: ` <shared-custom-multiselect
    [ramList]="testList"
    [selectedValue]="selectedValue">
  </shared-custom-multiselect>`
})
export class TestComponent{
  testList = ['2GB', '4GB', '8GB', '12GB', '16GB', '24GB', '32GB', '48GB', '64GB', '96GB'];
  selectedValue = '2GB';
}
