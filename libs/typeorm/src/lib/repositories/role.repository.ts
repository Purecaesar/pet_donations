import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { RoleEntity } from '@pet-donations/typeorm';

@Injectable()
export class RoleRepository {
  constructor(private readonly connection: Connection) {}

  public getRoleById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  public getAllRoles() {
    return this.repo.find({
      relations: ['availableActions'],
    });
  }

  private get repo() {
    return this.connection.getRepository(RoleEntity);
  }
}
