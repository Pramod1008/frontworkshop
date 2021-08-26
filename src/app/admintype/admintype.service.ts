import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { admintypeCreatDto, adminTypeDto } from './admintype.model';

@Injectable({
  providedIn: 'root'
})
export class AdmintypeService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiUrl + '/AdminType'

  // getAll(): Observable<adminTypeDto[]>{
  //   return this.http.get<adminTypeDto[]>(this.apiURL+'/GetAllAdminType');
  // }
  
  get(page: number, recordsPerPage: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<any>(this.apiURL+'/GetAllAdminType', {observe: 'response', params});
  }

  getById(id: number): Observable<adminTypeDto>{
    return this.http.get<adminTypeDto>(`${this.apiURL}/${id}`);
  }

  create(admintype: admintypeCreatDto){
    return this.http.post(this.apiURL+'/Create', admintype);
  }

  edit(id: number, admintype: admintypeCreatDto){
    return this.http.put(`${this.apiURL}/${id}`, admintype);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
