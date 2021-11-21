import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  Product1
} from '../models/product1';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl: string = '/api/products'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable < Product1[] > {
    return this.httpClient.get < Product1[] > (this.productsUrl)
  }

  deleteProduct(id: number): Observable < Product1 > {
    const url = this.productsUrl + '/' + id;
    return this.httpClient.delete < Product1 > (url);
  }

  addProduct(product: Product1): Observable < Product1 > {
    return this.httpClient.post < Product1 > (this.productsUrl, product, this.httpOptions);
  }

  getProductById(id: number): Observable < Product1 > {
    return this.httpClient.get < Product1 > (this.productsUrl + '/' + id);
  }

  updateProduct(id: number, product: Product1): Observable < Product1 > {
    return this.httpClient.put < Product1 > (this.productsUrl + '/' + id, product, this.httpOptions);
  }
}
