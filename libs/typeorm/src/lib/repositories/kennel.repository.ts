import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { KennelEntity } from '@pet-donations/typeorm';

@Injectable()
export class KennelRepository {
  constructor(private readonly connection: Connection) {}

  public getAllKennels() {
    return this.repo.find({
      relations: ['user', 'news', 'location', 'paymentDetails', 'crowdfunding'],
    });
  }

  private get repo() {
    return this.connection.getRepository(KennelEntity);
  }
}
