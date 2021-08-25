import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admintypeCreatDto } from '@app/admintype/admintype.model';
import { parseWebAPIErrors } from '@app/utilities/utils';
import Swal from 'sweetalert2';
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
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Admin Type has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/admintype']);
    }, error => this.errors = parseWebAPIErrors(error));

  }
}
