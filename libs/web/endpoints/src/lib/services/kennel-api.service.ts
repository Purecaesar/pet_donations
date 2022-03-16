import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class KennelApiService {
  constructor(private readonly api: ApiService) {}
}
