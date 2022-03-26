import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {News, PublishNewsDto} from '@pet-donations/interfaces';

@Injectable()
export class NewsApiService {
  constructor(private readonly api: ApiService) {}

  public getAllNews() {
    return this.api.get<News[]>('news');
  }

  public publishNews(newsInfo: PublishNewsDto) {
    return this.api.post<News>('news', newsInfo);
  }
}
