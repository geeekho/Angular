import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';
import {
  Conversion
} from '../models/conversion';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class ConvertisseurComponent implements OnInit {
  convertValue: FormControl
  amount: number
  convertedList: Conversion[]

  constructor() {
    this.convertValue = new FormControl();

  }

  ngOnInit(): void {
    this.convertedList = []
    this.convertValue.valueChanges.subscribe(value => {
      this.amount = value
    })
  }

  storeValue(value: Conversion) {
    
    console.log(value)
    const found = this.convertedList.find(element =>
       element.montantEURO== value.montantEURO && element.montantTND == value.montantTND);
    if(found == null)
      this.convertedList.push(value)
    this.convertValue.reset()
  }

}
