import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAdmintypeComponent } from './admintype/form-admintype/form-admintype.component';
import { CreateAdmintypeComponent } from './admintype/create-admintype/create-admintype.component';
import { DisplayErrorsComponent } from './utilities/display-errors/display-errors.component';
import { EditAdmintypeComponent } from './admintype/edit-admintype/edit-admintype.component';
import { IndexAdmintypeComponent } from './admintype/index-admintype/index-admintype.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormAdmintypeComponent,
    CreateAdmintypeComponent,
    DisplayErrorsComponent,
    EditAdmintypeComponent,
    IndexAdmintypeComponent,
    GenericListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
