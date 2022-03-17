import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { merge, pluck, Subject, switchMap } from 'rxjs';
import { CrowdfundingApiService } from '@pet-donations/web/endpoints';
import { Crowdfunding } from '@pet-donations/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DonateDialogComponent } from '../components/donate-dialog/donate-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CrowdfundingControllerService {
  public get crowdfunding$() {
    return merge(
      this.ar.data.pipe<Crowdfunding[]>(pluck('crowdfunding')),
      this.crowdfundingTrigger$.pipe(
        switchMap(() => this.crowdfundingApi.getAllCrowdfunding())
      )
    );
  }

  private readonly crowdfundingTrigger$ = new Subject<null>();

  constructor(
    private readonly ar: ActivatedRoute,
    private readonly crowdfundingApi: CrowdfundingApiService,
    private readonly dialogService: MatDialog,
    private readonly snackbar: MatSnackBar
  ) {}

  public donate(cf: Crowdfunding) {
    const dialogRef = this.dialogService.open(DonateDialogComponent, {
      data: { cfName: cf.name, kennelName: cf.kennel?.name, cfId: cf.id },
    });

    dialogRef.afterClosed().subscribe({
      next: (donateAmount) => {
        if (!donateAmount) return;

        this.crowdfundingTrigger$.next(null);
        this.snackbar.open(
          `Congratulations! You successfully donated $${donateAmount} to ${cf.kennel.name}`,
          '',
          { duration: 2000 }
        );
      },
    });
  }
}
