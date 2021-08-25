import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAdmintypeComponent } from './admintype/create-admintype/create-admintype.component';
import { EditAdmintypeComponent } from './admintype/edit-admintype/edit-admintype.component';
import { IndexAdmintypeComponent } from './admintype/index-admintype/index-admintype.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admintype',  component: IndexAdmintypeComponent},
  { path: 'admintype/create', component: CreateAdmintypeComponent },
  { path: 'admintype/edit/:id', component: EditAdmintypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
