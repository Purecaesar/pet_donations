import { Module } from '@nestjs/common';
import { CrowdfundingService } from './services/crowdfunding.service';
import { CrowdfundingController } from './controllers/crowdfunding.controller';
import { TypeormModule } from '@pet-donations/typeorm';

@Module({
  imports: [TypeormModule],
  controllers: [CrowdfundingController],
  providers: [CrowdfundingService],
  exports: [],
})
export class ApiCrowdfundingModule {}
