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

  public findKennelById(id: number) {
    return this.repo.findOne({
      where: {
        id,
      },
      relations: ['user', 'user.role','news', 'location', 'paymentDetails', 'crowdfunding'],
    });
  }

  public updateKennel(id: number, kennel: Partial<KennelEntity>) {
    return this.repo.update({ id }, kennel);
  }

  public createKennel(kennel: Partial<KennelEntity>) {
    return this.repo.save(kennel);
  }

  private get repo() {
    return this.connection.getRepository(KennelEntity);
  }
}
