import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private httpClient: HttpClient,@Inject("baseUrl") private baseUrl: string) { 
    console.log("Service Started");
  }
  private getUrl(requestParams:Partial<RequestParams>) : string {
    return `${requestParams.anotherBaseUrl 
      ? requestParams.anotherBaseUrl : this.baseUrl}/${requestParams.controller}${requestParams.action 
      ? `/${requestParams.action}` : ""}`;
  }

  get<T>(requestParams:Partial<RequestParams>,id?:string) : Observable<T> {
    let url: string = "";
    url =`${this.getUrl(requestParams)}`;

    if(requestParams.fullEndpoint)
      url = requestParams.fullEndpoint;
    else
      url =`${this.getUrl(requestParams)}${id ? `/${id}` : ""}`;

    return this.httpClient.get<T>(url,{headers: requestParams.headers});
  }

  post<T>(requestParams:Partial<RequestParams>,body:Partial<T>) : Observable<T> {
    let url: string = "";
    if(requestParams.fullEndpoint)
      url = requestParams.fullEndpoint;
    else
      url =`${this.getUrl(requestParams)}`;
    return this.httpClient.post<T>(url, body, {headers: requestParams.headers});
  }

  put<T>(requestParams:Partial<RequestParams>,body:Partial<T>) : Observable<T> {
    let url: string = "";
    if(requestParams.fullEndpoint)
      url = requestParams.fullEndpoint;
    else
      url =`${this.getUrl(requestParams)}`;
    return this.httpClient.put<T>(url, body, {headers: requestParams.headers});
  }

  delete<T>(requestParams:Partial<RequestParams>,id:string) : Observable<T> {
    let url: string = "";
    if(requestParams.fullEndpoint)
      url = requestParams.fullEndpoint;
    else
      url =`${this.getUrl(requestParams)}/${id}`;
    return this.httpClient.delete<T>(url, {headers: requestParams.headers});
  }
  
}


export class RequestParams {
  public controller?: string;
  public action?: string;
  public headers?: HttpHeaders
  public anotherBaseUrl?: string;
  public fullEndpoint?: string;
}