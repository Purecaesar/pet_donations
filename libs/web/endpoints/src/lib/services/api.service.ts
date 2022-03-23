import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_DOMAIN_PROVIDER } from '../providers/api-domain.provider';
import { RequestOptions } from '../models/request-options.interface';

@Injectable()
export class ApiService {
  constructor(
    @Inject(API_DOMAIN_PROVIDER)
    private readonly apiDomain: string,
    private readonly httpClient: HttpClient
  ) {}

  public get<T>(url: string, options?: RequestOptions) {
    return this.httpClient.get<T>(`${this.apiDomain}/${url}`, options);
  }

  public post<T>(url: string, body: any, options?: RequestOptions) {
    return this.httpClient.post<T>(`${this.apiDomain}/${url}`, body, options);
  }

  public patch<T>(url: string, body: any, options?: RequestOptions) {
    return this.httpClient.patch<T>(`${this.apiDomain}/${url}`, body, options);
  }

  public delete<T>(url: string, options?: RequestOptions) {
    return this.httpClient.delete<T>(`${this.apiDomain}/${url}`, options);
  }
}
