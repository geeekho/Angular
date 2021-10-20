import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  id : any

  constructor(private ac : ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(res=>{
      this.id = res.get('id')
      console.log(this.id)
    })

  }

}
