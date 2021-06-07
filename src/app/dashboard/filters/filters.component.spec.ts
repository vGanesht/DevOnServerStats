import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DEFAULT_FILTER_DATA } from './filter-constants';

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
    const location = 'AmsterdamAMS-01';
    const updateFilter = spyOn(component, 'updateFilter');
    component.updateLocation(location);
    expect(updateFilter).toHaveBeenCalled();
    expect(component.filterDetails.location).toEqual(location);
  });

  it('should update filter details when handleSlider is called', () => {
    const hdd = '2GB';
    const updateFilter = spyOn(component, 'updateFilter');
    component.updateHdd(hdd);
    expect(updateFilter).toHaveBeenCalled();
    expect(component.filterDetails.hdd).toEqual(hdd);
  });
  it('should update filter details to default values on calling resetFilters function', () => {
    component.filterDetails = {
      storage: 0,
      ram: ['2GB'],
      hdd: '2GB',
      location: 'AmsterdamAMS-01'
    };
    const updateFilter = spyOn(component, 'updateFilter');
    component.resetFilters();
    expect(updateFilter).toHaveBeenCalled();
    expect(component.filterDetails).toEqual(DEFAULT_FILTER_DATA);
  });
});
