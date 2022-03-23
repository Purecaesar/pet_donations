import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDataDto } from '@pet-donations/interfaces';
import { LoginUserDataDto } from '@pet-donations/interfaces';
import { UserInfoDto } from '@pet-donations/interfaces';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  public getUserByData(@Body() loginData: LoginUserDataDto) {
    return this.userService.getUserByData(loginData);
  }

  @Post('register')
  public createUser(@Body() userData: UserDataDto) {
    return this.userService.createUser(userData);
  }

  @Get('roles')
  public getRoles() {
    return this.userService.getRoles();
  }

  @Get(':id')
  public getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Post(':id')
  public updateUserInfo(
    @Param('id') id: number,
    @Body() userInfo: UserInfoDto
  ) {
    return this.userService.updateUserInfo(id, userInfo);
  }
}
