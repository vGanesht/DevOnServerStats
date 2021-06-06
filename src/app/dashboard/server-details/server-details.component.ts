import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs/internal/Subscription';
import { ServerDataService } from '../server-data.service';

@Component({
  selector: 'lw-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.scss']
})

export class ServerDetailsComponent implements OnInit, OnDestroy  {
   isLoading = false;
   displayedColumns: string[] = ['model', 'ram', 'hdd', 'location', 'price'];
   dataSource: any;
   locationList: string[];
   private serverSubscription: Subscription;
   @ViewChild(MatPaginator) paginator: MatPaginator;

   constructor(private serverDataService: ServerDataService) {
      this.dataSource = new MatTableDataSource<any>();
   }

   ngOnInit(): void {
      this.initData();
   }

   initData(): void
   {
      this.isLoading = true;
      this.serverSubscription = this.serverDataService.getServers().subscribe((result: any) => {
         this.dataSource = new MatTableDataSource<any>(result.servers);
         this.dataSource.paginator = this.paginator;
         const arr = result.servers.map((res) => {
            return res.location;
         });
         this.locationList = Array.from(new Set(arr));
         this.isLoading = false;
      });
   }

   handleFilters(data): void {
      this.isLoading = true;
      this.serverSubscription?.unsubscribe();
      this.serverSubscription = this.serverDataService.getFilteredServers(data).subscribe((result: any) => {
         this.dataSource = new MatTableDataSource<any>(result.servers);
         this.dataSource.paginator = this.paginator;
         this.isLoading = false;
      });
   }
   ngOnDestroy(): void {
      this.serverSubscription?.unsubscribe();
   }
}
