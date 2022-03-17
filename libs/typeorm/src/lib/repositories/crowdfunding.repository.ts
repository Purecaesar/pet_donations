import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { KennelCrowdfundingEntity } from '@pet-donations/typeorm';

@Injectable()
export class CrowdfundingRepository {
  constructor(private readonly connection: Connection) {}

  public getAllCrowdfunding() {
    return this.repo.find({
      relations: ['kennel'],
    });
  }

  public updateFoundedAmount(id: number, amount: number) {
    return this.repo.update({ id }, { founded: amount });
  }

  public findOneById(id: number) {
    return this.repo.findOne(id);
  }

  private get repo() {
    return this.connection.getRepository(KennelCrowdfundingEntity);
  }
}