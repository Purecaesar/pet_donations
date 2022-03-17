import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Crowdfunding } from '@pet-donations/interfaces';

@Component({
  selector: 'pd-crowdfunding-card',
  templateUrl: './crowdfunding-card.component.html',
  styleUrls: ['./crowdfunding-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrowdfundingCardComponent {
  @Input() public crowdfunding!: Crowdfunding;
  @Output() public donate = new EventEmitter<Crowdfunding>();
}
