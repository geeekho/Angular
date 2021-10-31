import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {


  FGAddFct: FormGroup
  @Output() notify = new EventEmitter<Invoice>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.FGAddFct = this.fb.group({
      idFacture: ['', Validators.compose([Validators.required, Validators.pattern("[1-9][0-9]*")])],
      montantFacture: ['', Validators.compose([Validators.required, Validators.pattern("[1-9][0-9]*")])],
      montantRemise: ['', Validators.compose([Validators.required, Validators.pattern("[1-9][0-9]*")])],
      dateFacture: ['', Validators.required],
    })
  }

  onSubmit() {
    this.notify.emit(this.FGAddFct.value)
  }

}
