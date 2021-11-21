import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, AfterViewInit {

  myVal : string
  val2 : string
  

  constructor() { }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  sendData(value : string){
    this.val2 = value
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }


}
