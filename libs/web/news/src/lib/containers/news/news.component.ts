import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NewsController } from '../../services/news.controller';

@Component({
  selector: 'pd-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [NewsController],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {
  public readonly news$ = this.controller.news$;

  constructor(private readonly controller: NewsController) {}
}
