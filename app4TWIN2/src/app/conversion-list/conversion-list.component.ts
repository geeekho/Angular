import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Conversion } from '../models/conversion';

@Component({
  selector: 'app-conversion-list',
  templateUrl: './conversion-list.component.html',
  styleUrls: ['./conversion-list.component.css']
})
export class ConversionListComponent implements OnInit, OnChanges {
  @Input() convertedList: Conversion[]
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

}
