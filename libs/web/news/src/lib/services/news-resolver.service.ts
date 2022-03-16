import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { News } from '@pet-donations/interfaces';
import { NewsApiService } from '@pet-donations/web/endpoints';

@Injectable()
export class NewsResolverService implements Resolve<News[]> {
  constructor(private readonly newsApi: NewsApiService) {}

  public resolve() {
    return this.newsApi.getAllNews();
  }
}
