import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { RangeDialogComponent } from './range-dialog.component';

describe('RangeDialogComponent', () => {
  let component: RangeDialogComponent;
  let fixture: ComponentFixture<RangeDialogComponent>;
  const testMatData = {
    storageDetails: [], selectedvalue: 0
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeDialogComponent ],
      imports: [
        MatButtonModule,
        MatDialogModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: testMatData
        },
        { provide: MatDialog, useClass: class {} },
        { provide: MatDialogRef, useClass: class {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
