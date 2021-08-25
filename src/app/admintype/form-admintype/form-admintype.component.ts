import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { admintypeCreatDto } from '@app/admintype/admintype.model';

@Component({
  selector: 'app-form-admintype',
  templateUrl: './form-admintype.component.html',
  styleUrls: ['./form-admintype.component.css']
})
export class FormAdmintypeComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }

  @Input()
  model: admintypeCreatDto;
  
  form: FormGroup;

  
  @Output()
  onSaveChanges: EventEmitter<admintypeCreatDto> = new EventEmitter<admintypeCreatDto>();

  ngOnInit(): void {
    this.form = this._fb.group({   
      TypeName: ['', Validators.required] 
  });

  if (this.model !== undefined){
    this.form.patchValue(this.model);
  }

  }

  onSubmit(){
    if(!this.form.valid){
      return
    }
    this.onSaveChanges.emit(this.form.value);        
  }

}
