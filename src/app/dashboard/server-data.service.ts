import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServerDataService {
  serverUrl = 'api/servers';

  constructor(private httpClient: HttpClient) { }

  getServers(): Observable<any> {
    return this.httpClient.get(environment.BASE_URL + this.serverUrl);
  }
  getFilteredServers(data): Observable<any> {
   const url = `${environment.BASE_URL}${this.serverUrl}${this.formquery(data)}`;
   return this.httpClient.get(url);
  }
  formquery(data): string
  {
    let query = '?storageMin=0';
    query += (data.storage?.length) ? `&storageMax=${this.processStorageInfo(data.storage)}` : '';
    query += (data.ram?.length > 0) ? `&ram=${this.formRamParams(data.ram)}` : '';
    query += (data.hdd) ? `&hdd=${data.hdd}` : '';
    query += (data.location) ? `&location=${data.location}` : '';
    return query;
  }

  formRamParams(data): string
  {
    const a = data.map((x) =>
    {
      return this.getNumber(x);
    });
    return a.join(',');
  }

  processStorageInfo(storage): string
  {
    return storage.includes('GB') ? this.getNumber(storage) : (this.getNumber(storage) + '000');
  }

  getNumber(storage): string
  {
    let numb = storage.match(/\d/g);
    numb = numb.join('');
    return numb;
  }
}
