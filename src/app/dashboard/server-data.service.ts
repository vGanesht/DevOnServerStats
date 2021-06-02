import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServerDataService {
  server_url='api/servers';

  constructor(private httpClient: HttpClient) { }

  getServers(){
    return this.httpClient.get(environment.BASE_URL+this.server_url);
  }
  getFilteredServers(data){
   let url=`${environment.BASE_URL}${this.server_url}${this.formquery(data)}`;
   return this.httpClient.get(url);
  }
  formquery(data)
  {
    let query='?storageMin=0';
    query+=(data.storage?.length)?`&storageMax=${this.processStorageInfo(data.storage)}`:'';
    query+=(data.ram?.length>0)?`&ram=${this.formRamParams(data.ram)}`:'';
    query+=(data.hdd)?`&hdd=${data.hdd}`:'';
    query+=(data.location)?`&location=${data.location}`:'';
    return query;
  }

  formRamParams(data)
  {
    let a= data.map((x)=>
    { 
      return this.getNumber(x);
    });
    return a.join(',');
  }

  processStorageInfo(storage)
  {
    return storage.includes("GB")? this.getNumber(storage):(this.getNumber(storage)*1000);
  }

  getNumber(x)
  {
    var numb = x.match(/\d/g);
    numb = numb.join("");
    return numb;
  }
}
