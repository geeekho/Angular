import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Conversion } from '../models/conversion';

@Component({
  selector: 'app-to-euro-convert',
  templateUrl: './to-euro-convert.component.html',
  styleUrls: ['./to-euro-convert.component.css']
})
export class ToEuroConvertComponent implements OnInit, OnChanges {
  @Input() amount: number
  @Output() euroValue = new EventEmitter<Conversion>()
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  sendData(){
      let value = new Conversion()
      value.montantTND = this.amount
      value.montantEURO = this.amount*3.28
    this.euroValue.emit(value)
  }

}
