import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update filter details when updateLocation is called', () => {
    let location='AmsterdamAMS-01';
    const updateFilter = spyOn(component, 'updateFilter');
    component.updateLocation(location);
    expect(updateFilter).toHaveBeenCalled();
    expect(component.filterDetails.location).toEqual(location);
  });

  it('should update filter details when handleSlider is called', () => {
    let hdd='2GB';
    const updateFilter = spyOn(component, 'updateFilter');
    component.updateHdd(hdd);
    expect(updateFilter).toHaveBeenCalled();
    expect(component.filterDetails.hdd).toEqual(hdd);
  });
});
