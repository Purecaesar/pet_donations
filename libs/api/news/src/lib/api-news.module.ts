import { Module } from '@nestjs/common';
import { NewsController } from './controllers/news.controller';
import { NewsService } from './services/news.service';
import {TypeormModule} from "@pet-donations/typeorm";

@Module({
  imports: [TypeormModule],
  controllers: [NewsController],
  providers: [NewsService],
  exports: [],
})
export class ApiNewsModule {}
