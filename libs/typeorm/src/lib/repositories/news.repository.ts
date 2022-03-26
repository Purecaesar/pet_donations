import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { NewsEntity } from '@pet-donations/typeorm';

@Injectable()
export class NewsRepository {
  constructor(private readonly connection: Connection) {}

  public getAllNews() {
    return this.repo.find({
      relations: ['kennel'],
      order: {
        date: 'DESC',
      },
    });
  }

  public getNewsById(id: number) {
    return this.repo.findOne({
      where: {
        id,
      },
      relations: ['kennel'],
    });
  }

  public createNews(news: Partial<NewsEntity>) {
    return this.repo.save(news);
  }

  private get repo() {
    return this.connection.getRepository(NewsEntity);
  }
}
