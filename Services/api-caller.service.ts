import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'model/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

// Each Dto should have its own service
export class ApiCallerService {

  private  url= environment.apisource;
  constructor(private http:HttpClient) { }


  getAllProducts():Observable<Product[]>{
  return  this.http.get<Product[]>(this.url+"/product/");
    
  
  }
  addProduct(product:Product):Observable<Product>{
   return this.http.post<Product>(this.url+"/product/add",product);
  }
}
