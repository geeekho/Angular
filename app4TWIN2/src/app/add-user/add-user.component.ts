import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  User
} from '../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnChanges {

  FGAddUsr: FormGroup
  @Output() notifyAdd = new EventEmitter < User > ();
  errorMessage: String

  constructor(private fb: FormBuilder) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void {
    this.FGAddUsr = this.fb.group({
      idCustomer: ['', Validators.compose([Validators.required, Validators.pattern("[1-9][0-9]*")])],
      firstName: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.minLength(3)])],
      birthDate: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")])],
      password: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9]{8,}?")])],
      profession: [{value:'Customer', disabled:true}, Validators.compose([Validators.required])],
      accountCategory: ['', Validators.compose([Validators.required])],
      picture: ['', Validators.compose([Validators.required])],
    })


  }

  onSubmit() {
    this.notifyAdd.emit(this.FGAddUsr.value)
  }

}
