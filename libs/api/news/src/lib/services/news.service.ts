import { Injectable } from '@nestjs/common';
import {
  KennelRepository,
  NewsEntity,
  NewsRepository,
} from '@pet-donations/typeorm';
import { News } from '@pet-donations/interfaces';
import { PublishNewsDto } from '@pet-donations/interfaces';

@Injectable()
export class NewsService {
  constructor(
    private readonly newsRepo: NewsRepository,
    private readonly kennelRepo: KennelRepository
  ) {}

  public async getAllNews() {
    const rawNews = await this.newsRepo.getAllNews();

    return rawNews.map((news) => NewsService.getNewsClass(news));
  }

  public async getNewsById(id: number) {
    const rawNews = await this.newsRepo.getNewsById(id);

    return NewsService.getNewsClass(rawNews);
  }

  public async publishNews(news: PublishNewsDto) {
    const kennel = await this.kennelRepo.findKennelById(news.kennelId);
    const newsRaw = await this.newsRepo.createNews({ ...news, kennel });

    return NewsService.getNewsClass(newsRaw);
  }

  private static getNewsClass(news: NewsEntity) {
    return new News({
      ...news,
      kennel: { id: news.kennel.id, name: news.kennel.name },
    });
  }
}
