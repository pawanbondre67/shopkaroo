import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = 'https://shopkaroo-backend.onrender.com';

  post(url:string,body:any){
    return this.httpClient.post(`${this.baseUrl}${url}`,body,{
      withCredentials: true
    });
  }

  get(url:string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}${url}`,{
      withCredentials: true
    });
  }

}
