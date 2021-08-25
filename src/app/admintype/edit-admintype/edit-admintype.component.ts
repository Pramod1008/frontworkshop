import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { alertError, alertSuccess } from '@app/utilities/sweetalert';
import { parseWebAPIErrors } from '@app/utilities/utils';
import Swal from 'sweetalert2';
import { admintypeCreatDto, adminTypeDto } from '../admintype.model';
import { AdmintypeService } from '../admintype.service';

@Component({
  selector: 'app-edit-admintype',
  templateUrl: './edit-admintype.component.html',
  styleUrls: ['./edit-admintype.component.css']
})
export class EditAdmintypeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private admintypeService: AdmintypeService,
    private router: Router) { }

    model: adminTypeDto;
    errors: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.admintypeService.getById(params.id).subscribe(admintype => {
        this.model = admintype;
      }
      , error => this.errors = parseWebAPIErrors(error))
    });
  }

  saveChanges(admintypeCreatDto: admintypeCreatDto){
   
    this.admintypeService.edit(this.model.Id, admintypeCreatDto)
    .subscribe(() => {
     alertSuccess('Your Admin Type has been Updated');
      this.router.navigate(["/admintype"]);
    }, error =>{ this.errors = parseWebAPIErrors(error);
      alertError(this.errors.toString());
  });
    
  }
}
