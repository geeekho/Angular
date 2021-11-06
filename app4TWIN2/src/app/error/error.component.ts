import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnChanges {
  @Input() error:any
  message: string

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes.error.currentValue.required){
      this.message = "Champ obligatoire"
    }else if(changes.error.currentValue.pattern!=null)
    {
      this.message = changes.error.currentValue.pattern.requiredPattern
    }else if(changes.error.currentValue.minlength!=null)
    {
      this.message = changes.error.currentValue.minlength.actualLength +" minimum "+changes.error.currentValue.minlength.requiredLength
    }
  }

  ngOnInit(): void {
  }

}
