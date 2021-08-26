import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admintypeCreatDto } from '@app/admintype/admintype.model';
import { alertError, alertSuccess } from '@app/utilities/sweetalert';
import { parseWebAPIErrors } from '@app/utilities/utils';
import { AdmintypeService } from '../admintype.service';

@Component({
  selector: 'app-create-admintype',
  templateUrl: './create-admintype.component.html',
  styleUrls: ['./create-admintype.component.css']
})
export class CreateAdmintypeComponent implements OnInit {

  errors: string[] = [];

  constructor(private router:Router,private admintypeservice: AdmintypeService) { }

  ngOnInit(): void {
  }

  saveChanges(genreCreationDTO: admintypeCreatDto){
    this.admintypeservice.create(genreCreationDTO).subscribe(() => {
     alertSuccess("Your Admin Type has been saved");
      this.router.navigate(['/admintype']);
    }, error =>{ this.errors = parseWebAPIErrors(error);
      alertError(this.errors.toString());
  });

  }
}
