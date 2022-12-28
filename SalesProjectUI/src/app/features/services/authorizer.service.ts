import { Injectable } from '@angular/core';
import{HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorizerService {

  constructor(private http :HttpClient) { }

  public getdetail(){
    return this.http.get("https://localhost:44320/api/SalesProject/GetAuthorizerProfiles");
  }

  

  
}
