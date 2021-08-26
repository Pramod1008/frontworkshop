import { Component, OnInit } from '@angular/core';
import { alertError, alertSuccess } from '@app/utilities/sweetalert';
import { parseWebAPIErrors } from '@app/utilities/utils';
import { PageEvent } from '@angular/material/paginator';
import { adminTypeDto } from '../admintype.model';
import { AdmintypeService } from '../admintype.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-index-admintype',
  templateUrl: './index-admintype.component.html',
  styleUrls: ['./index-admintype.component.css']
})
export class IndexAdmintypeComponent implements OnInit {
  
  errors: string[] = [];
  admintype: adminTypeDto[];

  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;

  columnsToDisplay = ['TypeName','IsActive', 'actions'];
  constructor(private admintypeService: AdmintypeService) { }

  ngOnInit(): void {
    this.loadAdminType();
  }

  loadAdminType(){
    // this.admintypeService.getAll(this.currentPage, this.pageSize).subscribe(admintype => {
    //   this.admintype = admintype;
    // });

    this.admintypeService.get(this.currentPage, this.pageSize).subscribe((response: HttpResponse<adminTypeDto[]>) => {
      this.admintype = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
    
    });
  }

  delete(id: number){
    this.admintypeService.delete(id)
    .subscribe(() => {
      alertSuccess("Your Admin Type has been Deleted Successfully");
      this.loadAdminType();
    }, error =>{ this.errors = parseWebAPIErrors(error);
        alertError(this.errors.toString());
    });
  }

  updatePagination(event: PageEvent){
    console.log(event);
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadAdminType();
  }
}
  