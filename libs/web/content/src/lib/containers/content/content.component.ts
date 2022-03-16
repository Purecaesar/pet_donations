import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AuthorizationComponent} from "@pet-donations/web/user";

@Component({
  selector: 'pd-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
  constructor(private readonly dialogService: MatDialog) {}

  public onAccountClick() {
    const dialogRef = this.dialogService.open(AuthorizationComponent);

    dialogRef.afterClosed().subscribe(d => console.log(d));
  }
}
