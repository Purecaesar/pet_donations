import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { TypeormModule } from '@pet-donations/typeorm';

@Module({
  imports: [TypeormModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class ApiUserModule {}
