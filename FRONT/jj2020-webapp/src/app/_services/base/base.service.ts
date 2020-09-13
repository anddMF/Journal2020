import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { InternResponse, CodResponse } from 'src/app/_models/intern-response.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders();
    this.header.append('Content-Type', 'application/json');
  }

  get2(url: string): InternResponse {
    let response = new InternResponse;
    let response2 = new InternResponse;
    this.http.get(url)
      .pipe(map(res => {
        console.log('base get')
        console.log(res)
        // let result = deserialize(Response, res);
        response.body = res;
        response.message = 'base get'
        return response;
      }))
    response2.message = 'veio foi nada no get';
    return response2;
  }

  get(url: string): InternResponse {
    let response = new InternResponse();
    let response2 = new InternResponse();
    this.http.get(url).subscribe(res => {
      console.log('base get')
      console.log(res)
      response.body = res;
      response.codResponse = CodResponse.OK;
      response.message = 'passou pelo get bem tranquilo, viu';
      return response;
    }, error => {
      console.log('tem coisa cagada na API')
      console.log(error)
      response.body = error;
      response.codResponse = CodResponse.InternalServerError;
      response.message = 'tem coisa cagada na API ou nesse request'
      return error
    });
    response2.message = 'rapaz, passei por todo o get e não rolou';
    response2.codResponse = CodResponse.NotFound;
    return response2;
  }

  get3<T>(url: string, operacao: string): Observable<T[]> {
    return this.http.get<T[]>(url)
    .pipe(tap(x => console.log(x)), catchError(this.handleError<T[]>(operacao, [])))
  }

  post(url: string, model: any): any {
    this.http.post(url, model, { headers: this.header }).subscribe(res => {
      console.log('base post');
      console.log(res);
      return res;
    }, error => {
      console.log('tem coisa cagada na API')
      console.log(error)
      return error;
    })
    return 'veio foi nada do post';
  }

  put(url: string, model: any): any {
    this.http.put(url, model, { headers: this.header }).subscribe(res => {
      console.log('base put');
      console.log(res);
      return res;
    }, error => {
      console.log('tem coisa cagada na API')
      console.log(error)
      return error
    })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //TODO: enviar erro para serviço de log
      console.error(error);

      //TODO: 
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  private log(message: string): void {
    console.log(`HeroService: ${message}`);
  }
}
