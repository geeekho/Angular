import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[];


  constructor(private httpClient: HttpClient) { }

  getAllUsers(){
  
    this.users= [{
      "idCustomer": 1,
      "firstName": "Mila",
      "lastName": " Kunis",
      "birthDate": "1999-06-30",
      "accountCategory": "Admin",
      "email": "mila@kunis.com",
      "password": "test",
      "picture": "https://bootdey.com/img/Content/avatar/avatar3.png&quot;",
      "profession": "Software Engineer"
    },
    {
      "idCustomer": 2,
      "firstName": "George",
      "lastName": "Clooney",
      "birthDate": "1999-06-30",
      "accountCategory": "Customer",
      "email": "marlon@brando.com",
      "password": "test",
      "picture": "https://bootdey.com/img/Content/avatar/avatar2.png&quot;",
      "profession": "Software Engineer"
    },
    {
      "idCustomer": 3,
      "firstName": "George",
      "lastName": "Clooney",
      "birthDate": "1999-06-30",
      "accountCategory": "Customer",
      "email": "marlon@brando.com",
      "password": "test",
      "picture": "https://bootdey.com/img/Content/avatar/avatar1.png&quot;",
      "profession": "Software Engineer"
    },
    {
      "idCustomer": 4,
      "firstName": "Ryan",
      "lastName": "Gossling",
      "birthDate": "1999-06-30",
      "accountCategory": "Golden",
      "email": "Ryan@nicholson.com",
      "password": "test",
      "picture": "https://bootdey.com/img/Content/avatar/avatar4.png&quot;",
      "profession": "Software Engineer"
    },
    {
      "idCustomer": 5,
      "firstName": "Robert",
      "lastName": "Downey",
      "birthDate": "1999-06-30",
      "accountCategory": "Blocked Account",
      "email": "robert@nicholson.com",
      "password": "test",
      "picture": "https://bootdey.com/img/Content/avatar/avatar5.png&quot;",
      "profession": "Software Engineer"
    }
  ] 
return this.users
  }

  getUsersFromDb(): Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:3000/users")
  }

}
