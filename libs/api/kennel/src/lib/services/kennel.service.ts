import { Injectable } from '@nestjs/common';
import { KennelRepository } from '@pet-donations/typeorm';

@Injectable()
export class KennelService {
  constructor(private readonly kennelRepo: KennelRepository) {}

  public getKennelById(id: number) {
    return this.kennelRepo.findKennelById(id);
  }

  public getKennels() {
    return this.kennelRepo.getAllKennels();
  }
}
