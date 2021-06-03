import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { ServerDataService } from '../server-data.service';

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.scss']
})

export class ServerDetailsComponent implements OnInit  {
   isLoading=false;
   displayedColumns: string[] = ['model', 'ram', 'hdd', 'location','price'];
   dataSource:any;
   locationList:string[];
   private serverSubscription: Subscription;
   @ViewChild(MatPaginator) paginator : MatPaginator;

   constructor(private _serverDataService:ServerDataService) { 
      this.dataSource = new MatTableDataSource<any>();
   }

   ngOnInit(): void {
      this.initdata();
   }

   initdata()
   {
      this.isLoading=true;
      this.serverSubscription=this._serverDataService.getServers().subscribe((x:any)=>{
         this.dataSource = new MatTableDataSource<any>(x.servers);
         this.dataSource.paginator = this.paginator;
        
         let arr=x.servers.map((x)=>{
            return x.location;
         });
         this.locationList=Array.from(new Set(arr));
         this.isLoading=false;
      });
  }
  handleFilters(data){
   this.isLoading=true;
   this.serverSubscription?.unsubscribe();
   this.serverSubscription=this._serverDataService.getFilteredServers(data).subscribe((x:any)=>{
      this.dataSource = new MatTableDataSource<any>(x.servers);
      this.dataSource.paginator = this.paginator;
      this.isLoading=false;
   });
  }

   ngOnDestroy(){
      this.serverSubscription?.unsubscribe();
   }
}
