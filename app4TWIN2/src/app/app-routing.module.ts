import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { AddProductRFComponent } from './add-product-rf/add-product-rf.component';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { FormUserComponent } from './form-user/form-user.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ListUserComponent } from './list-user/list-user.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { MainUserComponent } from './main-user/main-user.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
 
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"mainuser", component:MainUserComponent, children:[
    {path:"listuser/:cat", component:ListUserComponent},
    {path:"addUser", component:FormUserComponent}
  ]},
  {path:"mainproduct", component:MainProductComponent},
  {path:"mainprovider", component:MainProviderComponent},
  {path:"maininvoice", component:MainInvoiceComponent, children:[
    {path:"add", component:AddInvoiceComponent}
  ]},
  //{path:"invoice/:id/:active", component:InvoiceComponent},
  {path:"invoice", component:InvoiceComponent},
  {path:"product", component:MainProductComponent, children:[
    {path:"addTD", component:AddProductTDComponent},
    {path:"addRF", component:AddProductRFComponent},

  ]},

  {path:"converter", component:ConvertisseurComponent},
  {path:"**", component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
