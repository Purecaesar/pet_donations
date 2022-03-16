import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { UserEntity } from '@pet-donations/typeorm';

@Injectable()
export class UserRepository {
  constructor(private readonly connection: Connection) {}

  public findUserById(id: number) {
    return this.repo.findOne({
      where: {
        id,
      },
      relations: [
        'role',
        'kennel',
        'role.availableActions',
        'kennel.news',
        'kennel.location',
      ],
    });
  }

  public getUsersByQuery(where: Partial<Record<keyof UserEntity, string | number>>[]) {
    return this.repo.find({
      where
    });
  }

  public getUserByQuery(where: Partial<Record<keyof UserEntity, string | number>>[]) {
    return this.repo.findOne({
      where,
      relations: [
        'role',
        'kennel',
        'role.availableActions',
        'kennel.news',
        'kennel.location',
      ],
    });
  }

  public getAllUsers() {
    return this.repo.find({
      relations: [
        'role',
        'kennel',
        'role.availableActions',
        'kennel.news',
        'kennel.location',
      ],
    });
  }

  public createUser(user: Partial<UserEntity>) {
    return this.repo.save(user);
  }

  private get repo() {
    return this.connection.getRepository(UserEntity);
  }
}
