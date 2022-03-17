import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Crowdfunding } from '@pet-donations/interfaces';

@Injectable()
export class CrowdfundingApiService {
  constructor(private readonly api: ApiService) {}

  public getAllCrowdfunding(): Observable<Crowdfunding[]> {
    return this.api.get('crowdfunding');
  }

  public donate(id: number, amount: number) {
    return this.api.post(`crowdfunding/${id}/donate`, { donateAmount: amount });
  }
}
