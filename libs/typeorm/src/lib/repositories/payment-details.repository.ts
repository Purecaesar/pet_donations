import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { PaymentDetailsEntity } from '@pet-donations/typeorm';

@Injectable()
export class PaymentDetailsRepository {
  constructor(private readonly connection: Connection) {}

  public createLocation(paymentDetails: Partial<PaymentDetailsEntity>) {
    return this.repo.save(paymentDetails);
  }

  public updateLocation(
    id: number,
    paymentDetails: Partial<PaymentDetailsEntity>
  ) {
    return this.repo.update({ id }, paymentDetails);
  }

  public findById(id: number) {
    return this.repo.findOne({ id });
  }

  public removeLocation(id: number) {
    return this.repo.delete({ id });
  }

  public get repo() {
    return this.connection.getRepository(PaymentDetailsEntity);
  }
}
