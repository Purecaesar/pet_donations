import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { KennelRepository } from './repositories/kennel.repository';

const REPOSITORIES = [UserRepository, KennelRepository];

@Module({
  imports: [TypeOrmModule],
  providers: [...REPOSITORIES],
  exports: [...REPOSITORIES, TypeOrmModule],
})
export class TypeormModule {}
