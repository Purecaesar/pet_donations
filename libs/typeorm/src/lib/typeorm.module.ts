import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { KennelRepository } from './repositories/kennel.repository';
import { NewsRepository } from './repositories/news.repository';
import { RoleRepository } from './repositories/role.repository';

const REPOSITORIES = [
  UserRepository,
  KennelRepository,
  NewsRepository,
  RoleRepository,
];

@Module({
  imports: [TypeOrmModule],
  providers: [...REPOSITORIES],
  exports: [...REPOSITORIES, TypeOrmModule],
})
export class TypeormModule {}
