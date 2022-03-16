import {Controller, Get, Param} from '@nestjs/common';
import { NewsService } from '../services/news.service';

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
}
