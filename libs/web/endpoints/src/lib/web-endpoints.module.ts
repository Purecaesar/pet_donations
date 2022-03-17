import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_DOMAIN_PROVIDER } from './providers/api-domain.provider';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { KennelApiService } from './services/kennel-api.service';
import { NewsApiService } from './services/news-api.service';
import { UserApiService } from './services/user-api.service';
import { CrowdfundingApiService } from './services/crowdfunding-api.service';

const apiServices = [
  KennelApiService,
  NewsApiService,
  UserApiService,
  CrowdfundingApiService,
];

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class WebEndpointsModule {
  public static forRoot(
    apiDomain: string
  ): ModuleWithProviders<WebEndpointsModule> {
    return {
      ngModule: WebEndpointsModule,
      providers: [
        ApiService,
        ...apiServices,
        {
          provide: API_DOMAIN_PROVIDER,
          useFactory: () => apiDomain,
        },
      ],
    };
  }
}
