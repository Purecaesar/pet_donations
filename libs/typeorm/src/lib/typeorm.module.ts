import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { KennelRepository } from './repositories/kennel.repository';
import { NewsRepository } from './repositories/news.repository';
import { RoleRepository } from './repositories/role.repository';
import { CrowdfundingRepository } from './repositories/crowdfunding.repository';
import { PaymentDetailsRepository } from './repositories/payment-details.repository';
import { LocationRepository } from './repositories/location.repository';

const REPOSITORIES = [
  UserRepository,
  KennelRepository,
  NewsRepository,
  RoleRepository,
  CrowdfundingRepository,
  PaymentDetailsRepository,
  LocationRepository,
];

@Module({
  imports: [TypeOrmModule],
  providers: [...REPOSITORIES],
  exports: [...REPOSITORIES, TypeOrmModule],
})
export class TypeormModule {}
