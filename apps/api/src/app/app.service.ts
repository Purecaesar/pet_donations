import { Injectable } from '@nestjs/common';
import { UserRepository } from '@pet-donations/typeorm';
import { KennelRepository } from '@pet-donations/typeorm';

@Injectable()
export class AppService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly kennelRepo: KennelRepository
  ) {}

  public getUsers() {
    return this.userRepo.getAllUsers();
  }

  public getKennels() {
    return this.kennelRepo.getAllKennels();
  }
}
