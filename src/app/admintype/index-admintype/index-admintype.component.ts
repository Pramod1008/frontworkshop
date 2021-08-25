import { Component, OnInit } from '@angular/core';
import { alertError, alertSuccess } from '@app/utilities/sweetalert';
import { parseWebAPIErrors } from '@app/utilities/utils';
import Swal from 'sweetalert2';
import { adminTypeDto } from '../admintype.model';
import { AdmintypeService } from '../admintype.service';

@Component({
  selector: 'app-index-admintype',
  templateUrl: './index-admintype.component.html',
  styleUrls: ['./index-admintype.component.css']
})
export class IndexAdmintypeComponent implements OnInit {
  
  errors: string[] = [];
  admintype: adminTypeDto[];

  columnsToDisplay = ['TypeName','IsActive', 'actions'];
  constructor(private admintypeService: AdmintypeService) { }

  ngOnInit(): void {
    this.loadAdminType();
  }

  loadAdminType(){
    this.admintypeService.getAll().subscribe(admintype => {
      this.admintype = admintype;
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
}
  