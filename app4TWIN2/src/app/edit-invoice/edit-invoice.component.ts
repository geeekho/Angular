import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit, OnChanges {
  
  FGEdtFct: FormGroup
  @Input() invoice : Invoice
  @Output() notify = new EventEmitter<Invoice>();


  constructor(private fb: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {
      this.FGEdtFct = this.fb.group({
      idFacture: [this.invoice?.idFacture, Validators.compose([Validators.required, Validators.pattern("[1-9][0-9]*")])],
      montantFacture: [this.invoice?.montantFacture, Validators.compose([Validators.required, Validators.pattern("[1-9][0-9]*")])],
      montantRemise: [this.invoice?.montantRemise, Validators.compose([Validators.required, Validators.pattern("[1-9][0-9]*")])],
      dateFacture: [this.invoice?.dateFacture, Validators.required],
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.notify.emit(this.FGEdtFct.value)
  }

}
