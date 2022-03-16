import { Injectable } from '@nestjs/common';
import { NewsEntity, NewsRepository } from '@pet-donations/typeorm';
import { News } from '@pet-donations/interfaces';

@Injectable()
export class NewsService {
  constructor(private readonly newsRepo: NewsRepository) {}

  public async getAllNews() {
    const rawNews = await this.newsRepo.getAllNews();

    return rawNews.map((news) => NewsService.getNewsClass(news));
  }

  public async getNewsById(id: number) {
    const rawNews = await this.newsRepo.getNewsById(id);

    return NewsService.getNewsClass(rawNews);
  }

  private static getNewsClass(news: NewsEntity) {
    return new News({
      ...news,
      kennel: { id: news.kennel.id, name: news.kennel.name },
    });
  }
}
