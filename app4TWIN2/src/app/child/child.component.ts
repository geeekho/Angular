import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() prop1 : string
  @Output() notify = new EventEmitter<string>();
  constructor() { }
 

  send(value : string){
    this.notify.emit(value)
  }

  ngOnInit(): void {
    console.log(this.prop1)
  }
}
