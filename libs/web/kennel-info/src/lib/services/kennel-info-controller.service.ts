import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {filter, merge, pluck, Subject, switchMap, tap} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateKennelDialogComponent } from '../components/create-kennel-dialog/create-kennel-dialog.component';
import { KennelApiService } from '@pet-donations/web/endpoints';
import { Kennel, PaymentDetails } from '@pet-donations/interfaces';
import { UserService } from '@pet-donations/web/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    private readonly userService: UserService
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
        tap(kennel => (this.kennelId = kennel.id))
      )
      .subscribe();
  }

  public saveKennelData() {
    const rawFormData = this.form.getRawValue();

    this.kennelApi.updateKennel(this.kennelId as number, rawFormData)
      .pipe(
        tap(kennel => this.updatedKennel$.next(kennel))
      ).subscribe();
  }

  private setUpKennel(kennel: Kennel) {
    ['name', 'avatarUrl', 'description'].forEach(fieldName => {
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
