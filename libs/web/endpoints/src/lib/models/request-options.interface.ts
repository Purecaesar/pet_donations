import {HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";

export interface RequestOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  context?: HttpContext;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
}
