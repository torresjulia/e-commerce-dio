import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()

export class BookService{
  private url = "URL DA API ";

  httpOtions= {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http:HttpClient){}

  getBook(){

    return this.http.get(this.url)

  }

}
