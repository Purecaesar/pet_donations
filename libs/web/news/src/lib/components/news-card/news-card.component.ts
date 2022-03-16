import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { News } from '@pet-donations/interfaces';

@Component({
  selector: 'pd-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsCardComponent {
  @Input() public news!: News;
}
