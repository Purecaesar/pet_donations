import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CrowdfundingService } from '../services/crowdfunding.service';
import { DonateDataDto } from '@pet-donations/interfaces';

@Controller('crowdfunding')
export class CrowdfundingController {
  constructor(private readonly crowdfundingService: CrowdfundingService) {}

  @Get()
  public getAllCrowdfunding() {
    return this.crowdfundingService.getAllCrowdfunding();
  }

  @Post(':id/donate')
  public donate(@Body() donateData: DonateDataDto, @Param('id') id: number) {
    return this.crowdfundingService.donate(donateData, id);
  }
}
