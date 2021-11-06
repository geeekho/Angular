import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Provider } from '../models/provider';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {
  FGAddPrvd: FormGroup
  @Output() notifyAdd = new EventEmitter<Provider>();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.FGAddPrvd = this.fb.group({
      idProvider: ['', Validators.compose([Validators.required, Validators.pattern("[1-9][0-9]*")])],
      code: ['', Validators.compose([Validators.required, Validators.pattern("[1-9][0-9]*")])],
      libelle: ['', Validators.compose([Validators.required])],
    })
  }

  onSubmit() {
    this.notifyAdd.emit(this.FGAddPrvd.value)
  }

}
