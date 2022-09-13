import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(
    private httpClient: HttpClient) {
  }

  hostName: string = 'http://localhost:3000';

  getDataWithPost(url: string, obj: any = {}) {
    return this.httpClient.post(this.hostName + url, obj)
      .pipe(
        map((data: any) => {
          
          return data;
        }), catchError((error: any) => {

          if (error.message.includes('/Login?')) {
            console.log('errorrrrr-1')

            return window.location.href = "/#/Login";
          } else
            return throwError('Something went wrong!');
        })
      )
  }

}
