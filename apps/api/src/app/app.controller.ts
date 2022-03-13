import {Controller, Get, Param} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  public getData() {
    return this.appService.getUsers();
  }

  @Get('users/:id')
  public getUserById(@Param('id') id: number) {
    return this.appService.getUserById(id);
  }

  @Get('kennels')
  public getKennels() {
    return this.appService.getKennels();
  }
}
