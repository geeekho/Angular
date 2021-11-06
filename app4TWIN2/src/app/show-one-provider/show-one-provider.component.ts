import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Provider } from '../models/provider';

@Component({
  selector: 'app-show-one-provider',
  templateUrl: './show-one-provider.component.html',
  styleUrls: ['./show-one-provider.component.css']
})
export class ShowOneProviderComponent implements OnInit, OnChanges {
  @Input() ListProviders : Provider[]
  @Output() notifyDel = new EventEmitter<Provider[]>()
  @Output() notifyFilter = new EventEmitter<String>()
  filter: FormControl

  constructor() {
    this.filter = new FormControl();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log("changes")
    console.log(changes)
  
  }

  ngOnInit(): void {
    this.filter.valueChanges.subscribe(value=>{
      this.notifyFilter.emit(value)
    })
  }

 
  delete(provider : Provider){
    const index: number = this.ListProviders.indexOf(provider);
    if (index !== -1) {
        this.ListProviders.splice(index, 1);
    }
    this.notifyDel.emit(this.ListProviders)
  }



}
