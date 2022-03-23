import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { KennelService } from '../services/kennel.service';
import { CreateKennelDto, UpdateKennelDto } from '@pet-donations/interfaces';

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

  @Post()
  public createKennel(@Body() kennelInfo: CreateKennelDto) {
    return this.kennelService.createKennel(kennelInfo);
  }

  @Patch(':id')
  public updateKennel(
    @Body() kennelInfo: UpdateKennelDto,
    @Param('id') id: number
  ) {
    return this.kennelService.updateKennel(id, kennelInfo);
  }
}
