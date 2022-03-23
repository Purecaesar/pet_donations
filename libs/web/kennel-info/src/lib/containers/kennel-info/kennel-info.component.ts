import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KennelInfoControllerService } from '../../services/kennel-info-controller.service';

@Component({
  selector: 'pd-kennel-info',
  templateUrl: './kennel-info.component.html',
  styleUrls: ['./kennel-info.component.scss'],
  providers: [KennelInfoControllerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KennelInfoComponent {
  public readonly kennel$ = this.controller.kennel$;
  public readonly form = this.controller.form;

  constructor(private readonly controller: KennelInfoControllerService) {
  }

  public onCreateClick() {
    this.controller.openCreateDialog();
  }

  public onAddLocation() {
    this.controller.addLocation();
  }

  public onRemoveLocation() {
    this.controller.removeLocation();
  }

  public onAddPayment() {
    this.controller.addPayment();
  }

  public onRemovePayment() {
    this.controller.removePayment();
  }

  public onSave() {
    this.controller.saveKennelData();
  }
}
