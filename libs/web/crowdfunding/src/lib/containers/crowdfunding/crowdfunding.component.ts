import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CrowdfundingControllerService } from '../../services/crowdfunding-controller.service';
import { Crowdfunding } from '@pet-donations/interfaces';

@Component({
  selector: 'pd-crowdfunding',
  templateUrl: './crowdfunding.component.html',
  styleUrls: ['./crowdfunding.component.scss'],
  providers: [CrowdfundingControllerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrowdfundingComponent {
  public readonly crowdfunding$ = this.controller.crowdfunding$;

  constructor(private readonly controller: CrowdfundingControllerService) {}

  public onDonate(cf: Crowdfunding) {
    this.controller.donate(cf);
  }
}
