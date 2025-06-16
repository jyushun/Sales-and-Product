import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataItem } from '../../models/data-item';
import { MatTableDataSource } from '@angular/material/table';
import { SalesItem } from '../../models/salesitem';


@Component({
  selector: 'app-data-viewer',
  standalone: true,
  imports: [],
  templateUrl: './data-viewer.component.html',
  styleUrl: './data-viewer.component.css'
})

export class DataViewerComponent {
  displayedColumns: string[] = ['ProductName', 'Manufacturer', 'Color','Brand','FiscalMonthOfYearNames', 'SalesQuantity','SalesAmount','CustomerCount','DeliveredQuantity'];
  dataSource = new MatTableDataSource<SalesItem>();  

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.dataSource.data = data;         
    });
  }


}
