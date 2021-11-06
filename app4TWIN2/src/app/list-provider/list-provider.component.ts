import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {
  Provider
} from '../models/provider';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit, OnChanges {


  ListProviders: Provider[]
  filteredListProviders: Provider[]
  showAdd: boolean

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("changes")
    console.log(changes)
  }

  ngOnInit(): void {
    this.showAdd = false
    this.filteredListProviders = this.ListProviders = [{
        idProvider: 1,
        code: "F-1978",
        libelle: "PC"
      },
      {
        idProvider: 2,
        code: "F-1978",
        libelle: "TV"
      },
      {
        idProvider: 3,
        code: "F-1978",
        libelle: "Table"
      },
    ]
  }

  updateList(list: Provider[]) {
    this.filteredListProviders = this.ListProviders = list
    //console.log(this.ListProviders)
  }

  getfilter(filter: any) {
    var str : string
    str=filter
    if (str.length > 0) {
      this.filteredListProviders = this.filteredListProviders.filter(provider => {
        console.log(provider.libelle.toLocaleLowerCase)
        return provider.libelle.toLocaleLowerCase().includes(str)
      })
    }
    else
      this.filteredListProviders = this.ListProviders
  }

  toggleAdd(){
    this.showAdd=!this.showAdd
  }
  addItem(provider: Provider){
    this.ListProviders.push(provider)
    this.filteredListProviders = this.ListProviders
    this.showAdd=!this.showAdd
  }

}
