import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ServerDataService } from './server-data.service';
import { environment } from 'src/environments/environment';

describe('ServerDataService', () => {
  let service: ServerDataService;
  let httpTestingController: HttpTestingController;
  const servers = {
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
  const SERVER_URL = 'api/servers';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);

    service = TestBed.inject(ServerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getNumber should  return only numbers in a string', () => {
    const testString = '123GB';
    expect(service.getNumber(testString)).toEqual('123');
  });

  it('should return data', () => {
    let result;
    service.getServers().subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: 'GET',
      url: environment.BASE_URL + SERVER_URL
    });

    req.flush([servers]);

    expect(result[0]).toEqual(servers);
  });

});
