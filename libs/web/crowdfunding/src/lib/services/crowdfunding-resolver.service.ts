import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CrowdfundingApiService } from '@pet-donations/web/endpoints';

@Injectable()
export class CrowdfundingResolverService implements Resolve<any> {
  constructor(private readonly crowdfundingApi: CrowdfundingApiService) {}

  public resolve() {
    return this.crowdfundingApi.getAllCrowdfunding();
  }
}
