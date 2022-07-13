import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AccountManagementService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(username: string, password: string){
    const body = {
      username: username,
      password: password
    }

    return this.httpClient.post("http://localhost:8000/account/login", body)
  }
}
