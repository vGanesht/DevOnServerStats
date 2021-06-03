import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MultiselectDialogComponent } from './multiselect-dialog.component';

describe('MultiselectDialogComponent', () => {
  let component: MultiselectDialogComponent;
  let fixture: ComponentFixture<MultiselectDialogComponent>;
  const testMatData = {
    list:[], selectedvalue:''
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectDialogComponent ],
       providers: [
        { provide: MAT_DIALOG_DATA, useValue: testMatData },
        { provide: MatDialog, useClass: class {} },
        { provide: MatDialogRef, useClass: class {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
