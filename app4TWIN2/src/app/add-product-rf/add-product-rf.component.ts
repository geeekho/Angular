import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Product
} from '../models/product';

@Component({
  selector: 'app-add-product-rf',
  templateUrl: './add-product-rf.component.html',
  styleUrls: ['./add-product-rf.component.css']
})
export class AddProductRFComponent implements OnInit {

  profiles = [{
      name: 'Electromenager'
    },
    {
      name: 'Alimentaire'
    },
    {
      name: 'Quincaillerie'
    }
  ];
  FGProduct: FormGroup
  prodList: Product[]
  currentProd: Product


  constructor(private fb: FormBuilder) {
    this.prodList = []
    this.currentProd = new Product()
  }

  ngOnInit(): void {
    this.FGProduct = this.fb.group({
      prodSection1: this.fb.group({
        idProd: ['', Validators.required],
        code: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z-0-9]{8}")])],
        libelle: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        prixU: ['', Validators.compose([Validators.required, Validators.pattern("[1-9][0-9]*")])],
      }),
      prodSection2: this.fb.group({
        idDetProd: ['', Validators.required],
        datecr: ['', Validators.required],
        datemodif: ['', Validators.required],
        selectCateg: [this.profiles[0].name, Validators.required],
      }),
    })
  }

  onSubmit() {
    //console.warn(this.FGProduct.value);
    //first section
    this.currentProd.IdProduit=this.FGProduct.get('prodSection1').get('idProd').value
    this.currentProd.Code=this.FGProduct.get('prodSection1').get('code').value
    this.currentProd.Libelle=this.FGProduct.get('prodSection1').get('libelle').value
    this.currentProd.PrixU=this.FGProduct.get('prodSection1').get('prixU').value
    this.currentProd.IdProduit=this.FGProduct.get('prodSection1').get('idProd').value
    this.currentProd.IdProduit=this.FGProduct.get('prodSection1').get('idProd').value

    //second section
    this.currentProd.IdDetP=this.FGProduct.get('prodSection2').get('idDetProd').value
    this.currentProd.DateCr=this.FGProduct.get('prodSection2').get('datecr').value
    this.currentProd.DateModif=this.FGProduct.get('prodSection2').get('datemodif').value
    this.currentProd.Categorie=this.FGProduct.get('prodSection2').get('selectCateg').value
    //console.warn(this.currentProd);

    //push product
    this.prodList.push(this.currentProd)
    console.log(JSON.stringify(this.prodList))
  }

}
