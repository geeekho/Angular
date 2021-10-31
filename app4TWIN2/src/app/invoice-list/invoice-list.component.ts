import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit, OnChanges {

  list: Invoice[]
  invoice : Invoice = null
  hidden : boolean

  constructor() { 
    this.hidden = true
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.list = [{
      idFacture: 1,
      montantFacture: 120,
      montantRemise: 10,
      dateFacture: "12/12/2021",
      active: true
    }, {
      idFacture: 2,
      montantFacture: 1020,
      montantRemise: 90,
      dateFacture: "22/11/2020",
      active: true
    },
    {
      idFacture: 3,
      montantFacture: 260,
      montantRemise: 30,
      dateFacture: "18/10/2020",
      active: false
    },
    {
      idFacture: 4,
      montantFacture: 450,
      montantRemise: 40,
      dateFacture: "14/12/2020",
      active: true
    },

  ]
  }

  delete(invoice : Invoice){
    const index: number = this.list.indexOf(invoice);
    if (index !== -1) {
        this.list.splice(index, 1);
    }
    this.invoice = null

  }

  sendData(value : Invoice){
    this.invoice = null
    this.list[this.list.findIndex(invoice => invoice.idFacture === value.idFacture)] = value;

  }

  addData(value : Invoice){
    this.list.push(value)
  }

  setInvoice(invoice : Invoice){
    this.hidden = true
    this.invoice = invoice
  }

  toggleAdd(){
    this.hidden = !this.hidden
    console.log(this.hidden)
    this.invoice = null
  }
}
