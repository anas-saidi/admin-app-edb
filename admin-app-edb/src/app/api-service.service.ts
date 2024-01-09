import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private baseUrl = 'http://localhost:8083';
  constructor(private http: HttpClient) {}
  getAllTransactions():Observable<any>{
    return this.http.get(
      `${this.baseUrl}/TRANSFER-SERVICE/api/v1/transaction`
    );
  }
  blockTransaction(transReq: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/TRANSFER-SERVICE/api/v1/transaction/agent/block`,
      transReq
    );
  }
  UnblockTransaction(transReq: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/TRANSFER-SERVICE/api/v1/transaction/agent/unblock`,
      transReq
    );
  }
  
}
