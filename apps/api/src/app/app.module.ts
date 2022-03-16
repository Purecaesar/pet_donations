import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeormModule } from '@pet-donations/typeorm';
import { getMetadataArgsStorage } from 'typeorm';
import { ApiKennelModule } from '@pet-donations/api/kennel';
import { ApiNewsModule } from '@pet-donations/api/news';
import { ApiUserModule } from '@pet-donations/api/user';

const APP_MODULES = [ApiKennelModule, ApiNewsModule, ApiUserModule];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5555,
      username: 'user',
      password: 'user',
      database: 'pet_donation',
      entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
      synchronize: true,
    }),
    TypeormModule,
    ...APP_MODULES,
  ],
})
export class AppModule {}
