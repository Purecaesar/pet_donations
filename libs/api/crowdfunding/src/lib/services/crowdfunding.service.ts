import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CrowdfundingRepository } from '@pet-donations/typeorm';
import { Crowdfunding, DonateDataDto } from '@pet-donations/interfaces';

@Injectable()
export class CrowdfundingService {
  constructor(private readonly crowdfundingRepo: CrowdfundingRepository) {}

  public async getAllCrowdfunding() {
    const crowdfunding = await this.crowdfundingRepo.getAllCrowdfunding();

    return crowdfunding.map((cf) => new Crowdfunding(cf));
  }

  public async donate(donateData: DonateDataDto, id: number) {
    const cf = await this.crowdfundingRepo.findOneById(id);

    if (!cf)
      throw new HttpException('Crowdfunding not found', HttpStatus.NOT_FOUND);

    return this.crowdfundingRepo.updateFoundedAmount(id, +cf.founded + donateData.donateAmount);
  }
}
