import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute, Router
} from '@angular/router';
import {
  Product1
} from '../models/product1';
import {
  ProductService
} from '../services/product.service';

@Component({
  selector: 'app-edit-profuct',
  templateUrl: './edit-profuct.component.html',
  styleUrls: ['./edit-profuct.component.css']
})
export class EditProfuctComponent implements OnInit {

  FGEdtPrd: FormGroup
  product: Product1


  constructor(private ac: ActivatedRoute, private fb: FormBuilder, private ps: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.FGEdtPrd = this.fb.group({
      id: [{
        value: '',
        disabled: true
      }, Validators.compose([Validators.required])],
      code: ['', Validators.compose([Validators.required])],
      libelle: ['', Validators.compose([Validators.required])],
      prixUnitaire: ['', Validators.compose([Validators.required])],
      tauxTVA: ['', Validators.compose([Validators.required])],
    })

    this.ac.paramMap.subscribe(next =>
      this.ps.getProductById(Number(next.get('id'))).subscribe(res => {
        this.product = res
        console.log(this.product)
        this.FGEdtPrd.setValue({
          id: this.product.id,
          code: this.product.code,
          libelle: this.product.libelle,
          prixUnitaire: this.product.prixUnitaire,
          tauxTVA: this.product.tauxTVA,
        })
      }), error => console.log(error)

    )
  }

  onSubmit() {
    this.product = this.FGEdtPrd.getRawValue()
    this.ps.updateProduct(this.product.id, this.product).subscribe(res => {
      this.router.navigateByUrl('/products')
    });
  }

}
