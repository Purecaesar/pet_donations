import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  CrowdfundingRepository,
  KennelRepository,
} from '@pet-donations/typeorm';
import { Crowdfunding, DonateDataDto } from '@pet-donations/interfaces';
import { CreateCrowdfundingDto } from '@pet-donations/interfaces';

@Injectable()
export class CrowdfundingService {
  constructor(
    private readonly crowdfundingRepo: CrowdfundingRepository,
    private readonly kennelRepo: KennelRepository
  ) {}

  public async getAllCrowdfunding() {
    const crowdfunding = await this.crowdfundingRepo.getAllCrowdfunding();

    return crowdfunding.map((cf) => new Crowdfunding(cf));
  }

  public async donate(donateData: DonateDataDto, id: number) {
    const cf = await this.crowdfundingRepo.findOneById(id);

    if (!cf)
      throw new HttpException('Crowdfunding not found', HttpStatus.NOT_FOUND);

    return this.crowdfundingRepo.updateFoundedAmount(
      id,
      +cf.founded + donateData.donateAmount
    );
  }

  public async publishCrowdfunding(crowdfunding: CreateCrowdfundingDto) {
    const kennel = await this.kennelRepo.findKennelById(crowdfunding.kennelId);

    const rawCrowdfunding = await this.crowdfundingRepo.createCrowdfunding({
      ...crowdfunding,
      kennel,
    });

    return new Crowdfunding(rawCrowdfunding);
  }
}
