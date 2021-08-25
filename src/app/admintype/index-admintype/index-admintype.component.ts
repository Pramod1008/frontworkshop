import { Component, OnInit } from '@angular/core';
import { adminTypeDto } from '../admintype.model';
import { AdmintypeService } from '../admintype.service';

@Component({
  selector: 'app-index-admintype',
  templateUrl: './index-admintype.component.html',
  styleUrls: ['./index-admintype.component.css']
})
export class IndexAdmintypeComponent implements OnInit {
  
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
      this.loadAdminType();
    });
  }
}
