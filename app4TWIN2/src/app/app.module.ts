import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { TestComponent } from './test/test.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainUserComponent } from './main-user/main-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddFormComponent } from './add-form/add-form.component';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';
import { FormUserComponent } from './form-user/form-user.component';
import { AddProductRFComponent } from './add-product-rf/add-product-rf.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { ShowOneProviderComponent } from './show-one-provider/show-one-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ErrorComponent } from './error/error.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { ToEuroConvertComponent } from './to-euro-convert/to-euro-convert.component';
import { ConversionListComponent } from './conversion-list/conversion-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProfuctComponent } from './edit-profuct/edit-profuct.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TestComponent,
    ListUserComponent,
    MainUserComponent,
    MainProductComponent,
    MainProviderComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    HomeComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
    AddFormComponent,
    AddProductTDComponent,
    FormUserComponent,
    AddProductRFComponent,
    ParentComponent,
    ChildComponent,
    AddInvoiceComponent,
    EditInvoiceComponent,
    ListProviderComponent,
    ShowOneProviderComponent,
    AddProviderComponent,
    AddUserComponent,
    ErrorComponent,
    ConvertisseurComponent,
    ToEuroConvertComponent,
    ConversionListComponent,
    ProductsComponent,
    AddProductComponent,
    EditProfuctComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
