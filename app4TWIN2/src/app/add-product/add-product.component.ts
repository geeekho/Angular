import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product1 } from '../models/product1';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  FGAddPrd: FormGroup
  @Output() notifyAdd = new EventEmitter < Product1 > ();



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.FGAddPrd = this.fb.group({
      code: ['', Validators.compose([Validators.required])],
      libelle: ['', Validators.compose([Validators.required])],
      prixUnitaire: ['', Validators.compose([Validators.required])],
      tauxTVA: ['', Validators.compose([Validators.required])],
    })
  }

  onSubmit(){
    this.notifyAdd.emit(this.FGAddPrd.value)

  }

}
