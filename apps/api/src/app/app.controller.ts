import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  public getData() {
    return this.appService.getUsers();
  }

  @Get('kennels')
  public getKennels() {
    return this.appService.getKennels();
  }
}
