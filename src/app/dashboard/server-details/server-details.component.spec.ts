import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ServerDataService } from '../server-data.service';

import { ServerDetailsComponent } from './server-details.component';

describe('ServerDetailsComponent', () => {
  let component: ServerDetailsComponent;
  let fixture: ComponentFixture<ServerDetailsComponent>;
  let mockService: ServerDataService;
  const serverInfo = {
    servers: [
    {
      model: 'HP DL120G7Intel G850',
      ram: {
        memory: '4',
        unit: 'GB',
        type: 'DDR3'
      },
      hdd: {
        memory: '1',
        count: '4',
        unit: 'TB',
        type: 'SATA2'
      },
      location: 'AmsterdamAMS-01',
      price: {
        currency: 'EUR',
        currencySymbol: '€',
        amountCents: 3999
      }
    }]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerDetailsComponent ],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockService = TestBed.inject(ServerDataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call init data', () => {
    const initData = spyOn(component, 'initData');
    component.ngOnInit();
    expect(initData).toHaveBeenCalled();
  });

  it('should initialize data source for table', () => {
    spyOn(mockService, 'getServers').and.returnValue(of(serverInfo));
    component.initData();
    expect(component.dataSource).toBeTruthy();
  });

  it('should load location List', () => {
    spyOn(mockService, 'getServers').and.returnValue(of(serverInfo));
    component.initData();
    expect(component.locationList).toEqual(['AmsterdamAMS-01']);
  });
});
