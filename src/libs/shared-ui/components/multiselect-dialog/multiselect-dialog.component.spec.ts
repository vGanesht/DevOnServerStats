import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectDialogComponent } from './multiselect-dialog.component';

describe('RangeDialogComponent', () => {
  let component: MultiselectDialogComponent;
  let fixture: ComponentFixture<MultiselectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectDialogComponent ]
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
