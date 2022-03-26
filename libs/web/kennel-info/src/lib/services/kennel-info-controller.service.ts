import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, merge, pluck, Subject, switchMap, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateKennelDialogComponent } from '../components/create-kennel-dialog/create-kennel-dialog.component';
import {
  CrowdfundingApiService,
  KennelApiService,
  NewsApiService,
} from '@pet-donations/web/endpoints';
import { Kennel, PaymentDetails } from '@pet-donations/interfaces';
import { UserService } from '@pet-donations/web/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PublishNewsDialogComponent } from '../components/publish-news-dialog/publish-news-dialog.component';
import { PublishCrowdfundingDialogComponent } from '../components/publish-crowdfunding-dialog/publish-crowdfunding-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class KennelInfoControllerService {
  public get kennel$() {
    return merge(
      this.ar.data.pipe<Kennel>(pluck('kennel')),
      this.updatedKennel$
    ).pipe(tap((kennel) => this.setUpKennel(kennel)));
  }

  public readonly form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    avatarUrl: new FormControl(null),
    description: new FormControl(null),
  });

  private readonly updatedKennel$ = new Subject<Kennel>();

  private kennelId = this.userService.getUser()?.kennel?.id;
  constructor(
    private readonly ar: ActivatedRoute,
    private readonly dialog: MatDialog,
    private readonly kennelApi: KennelApiService,
    private readonly userService: UserService,
    private readonly newsApi: NewsApiService,
    private readonly crowdfundingApi: CrowdfundingApiService,
    private readonly snackbar: MatSnackBar
  ) {}

  public addLocation(city?: string, address?: string) {
    this.form.removeControl('location');

    this.form.addControl(
      'location',
      new FormGroup({
        city: new FormControl(city, [Validators.required]),
        address: new FormControl(address, [Validators.required]),
      })
    );
  }

  public addPayment(paymentData?: PaymentDetails) {
    this.form.removeControl('paymentDetails');

    this.form.addControl(
      'paymentDetails',
      new FormGroup({
        bankName: new FormControl(paymentData?.bankName, [Validators.required]),
        bankBik: new FormControl(paymentData?.bankBik, [
          Validators.required,
          Validators.minLength(6),
        ]),
        bankInn: new FormControl(paymentData?.bankInn, [
          Validators.required,
          Validators.minLength(6),
        ]),
        kennelInn: new FormControl(paymentData?.kennelInn, [
          Validators.required,
          Validators.minLength(6),
        ]),
        kennelAccountNumber: new FormControl(paymentData?.kennelAccountNumber, [
          Validators.required,
          Validators.minLength(12),
        ]),
      })
    );
  }

  public removePayment() {
    this.form.removeControl('paymentDetails');
  }

  public removeLocation() {
    this.form.removeControl('location');
  }

  public openCreateDialog() {
    const user = this.userService.getUser();

    this.dialog
      .open(CreateKennelDialogComponent)
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((kennelName) =>
          this.kennelApi.createKennel({ kennelName, userId: user!.id })
        ),
        tap((kennel) => (this.kennelId = kennel.id))
      )
      .subscribe();
  }

  public saveKennelData() {
    const rawFormData = this.form.getRawValue();

    this.kennelApi
      .updateKennel(this.kennelId as number, rawFormData)
      .pipe(tap((kennel) => this.updatedKennel$.next(kennel)))
      .subscribe({
        next: () =>
          this.snackbar.open('Your info has been saved!', '', {
            duration: 2000,
          }),
        error: () =>
          this.snackbar.open('Something went wrong :(', '', {
            duration: 2000,
          }),
      });
  }

  public publishCrowdfunding() {
    this.dialog
      .open(PublishCrowdfundingDialogComponent)
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((crowdfundingInfo) =>
          this.crowdfundingApi.publishCrowdfunding({
            ...crowdfundingInfo,
            kennelId: this.kennelId,
          })
        )
      )
      .subscribe({
        next: () =>
          this.snackbar.open('Your crowdfunding is published!', '', {
            duration: 2000,
          }),
        error: () =>
          this.snackbar.open('Something went wrong :(', '', { duration: 2000 }),
      });
  }

  public publishNews() {
    this.dialog
      .open(PublishNewsDialogComponent)
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((newsInfo) =>
          this.newsApi.publishNews({ ...newsInfo, kennelId: this.kennelId })
        )
      )
      .subscribe({
        next: () =>
          this.snackbar.open('Your news is published!', '', { duration: 2000 }),
        error: () =>
          this.snackbar.open('Something went wrong :(', '', { duration: 2000 }),
      });
  }

  private setUpKennel(kennel: Kennel) {
    ['name', 'avatarUrl', 'description'].forEach((fieldName) => {
      this.form.get(fieldName)?.setValue(kennel[fieldName as keyof Kennel]);
    });

    if (kennel.location) {
      this.addLocation(kennel.location.city, kennel.location.address);
    }

    if (kennel.paymentDetails) {
      this.addPayment(kennel.paymentDetails);
    }
  }
}
