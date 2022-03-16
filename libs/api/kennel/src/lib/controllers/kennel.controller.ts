import { Controller, Get, Param } from '@nestjs/common';
import { KennelService } from '../services/kennel.service';

@Controller('kennels')
export class KennelController {
  constructor(private readonly kennelService: KennelService) {}

  @Get()
  public getAllKennels() {
    return this.kennelService.getKennels();
  }

  @Get(':id')
  public getKennelById(@Param('id') id: number) {
    return this.kennelService.getKennelById(id);
  }
}
