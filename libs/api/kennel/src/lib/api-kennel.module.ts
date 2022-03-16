import { Module } from '@nestjs/common';
import { KennelService } from './services/kennel.service';
import { KennelController } from './controllers/kennel.controller';
import { TypeormModule } from '@pet-donations/typeorm';

@Module({
  imports: [TypeormModule],
  controllers: [KennelController],
  providers: [KennelService],
  exports: [],
})
export class ApiKennelModule {}
