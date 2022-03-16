import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './containers/news/news.component';
import { NewsRouterModule } from './news-router.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NewsCardComponent } from './components/news-card/news-card.component';

@NgModule({
  imports: [CommonModule, NewsRouterModule, MatCardModule, MatIconModule],
  declarations: [NewsComponent, NewsCardComponent],
  exports: [NewsComponent],
})
export class WebNewsModule {}
