import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { CrowdfundingApiService } from '@pet-donations/web/endpoints';
import { BehaviorSubject, finalize } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

interface DialogData {
  cfName: string;
  kennelName: string;
  cfId: number;
}

@Component({
  selector: 'pd-donate-dialog',
  templateUrl: './donate-dialog.component.html',
  styleUrls: ['./donate-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonateDialogComponent {
  public readonly loading$ = new BehaviorSubject(false);
  public readonly donateAmount = new FormControl(null, [
    Validators.required,
    Validators.min(5),
  ]);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public readonly donateDialogData: DialogData,
    private readonly dialogRef: MatDialogRef<DonateDialogComponent>,
    private readonly cfApi: CrowdfundingApiService,
    private readonly snackbar: MatSnackBar
  ) {}

  public donate() {
    this.loading$.next(true);

    this.cfApi
      .donate(this.donateDialogData.cfId, this.donateAmount.value)
      .pipe(finalize(() => this.loading$.next(false)))
      .subscribe({
        error: ({ error }) => this.snackbar.open(error?.message, '', { duration: 2000 }),
        next: () => this.dialogRef.close(this.donateAmount.value),
      });
  }
}
