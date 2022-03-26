import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { NewsService } from '../services/news.service';
import {PublishNewsDto} from "@pet-donations/interfaces";

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  public getAllNews() {
    return this.newsService.getAllNews();
  }

  @Get(':id')
  public getNewsById(@Param('id') id: number) {
    return this.newsService.getNewsById(id);
  }

  @Post()
  public publishNews(@Body() news: PublishNewsDto) {
    return this.newsService.publishNews(news);
  }
}
