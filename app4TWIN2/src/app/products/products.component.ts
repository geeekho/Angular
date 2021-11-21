import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product1 } from '../models/product1';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList:Product1[]
  showAdd: boolean

  constructor(private prodService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.showAdd = false
    this.prodService.getAllProducts().subscribe(res=>{
      this.productList = res
    })
  }

  deleteProd(id: number){
    console.log(id)
    this.prodService.deleteProduct(id).subscribe(res=>{
      this.ngOnInit();
    });
  }

  toggleAdd(){
    this.showAdd = !this.showAdd
  }

  sendData(produit: Product1){
    console.log(produit)
    this.prodService.addProduct(produit).subscribe(res=>{
      console.log(res)
      this.showAdd = false
      this.router.navigateByUrl('/products')
    })
  }

}
