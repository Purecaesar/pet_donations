import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RoleRepository, UserRepository } from '@pet-donations/typeorm';
import { LoginUserDataDto, User, UserDataDto } from '@pet-donations/interfaces';
import { Role } from '@pet-donations/interfaces';
import { UserInfoDto } from '@pet-donations/interfaces';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly roleRepo: RoleRepository
  ) {}

  public getUserById(id: number) {
    return this.userRepo.findUserById(id);
  }

  public async updateUserInfo(id: number, userInfo: UserInfoDto) {
    const user = await this.userRepo.findUserEntityById(id);

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const role = await this.roleRepo.getRoleById(userInfo.role);
    await this.userRepo.updateUser(id, {
      name: userInfo.name,
      surname: userInfo.surname,
      role,
      avatar: userInfo.avatar,
    });

    const updatedUser = await this.userRepo.findUserById(id);

    return new User(updatedUser);
  }

  public async createUser(userData: UserDataDto) {
    const isUserExists = !!(
      await this.userRepo.getUsersByQuery([
        {
          email: userData.email,
        },
        {
          username: userData.username,
        },
      ])
    )?.length;

    if (isUserExists)
      throw new HttpException(
        'User with this email or username already exists',
        HttpStatus.CONFLICT
      );

    const userRole = await this.roleRepo.getRoleById(1);

    const user = await this.userRepo.createUser({
      ...userData,
      password: Buffer.from(userData.password).toString('base64'),
      role: userRole,
    });

    return new User(user);
  }

  public async getRoles() {
    const roles = await this.roleRepo.getAllRoles();

    return roles.map((role) => new Role(role));
  }

  public async getUserByData({ username, password }: LoginUserDataDto) {
    const user = await this.userRepo.getUserByQuery([
      {
        username,
        password: Buffer.from(password).toString('base64'),
      },
    ]);
    if (!user)
      throw new HttpException(
        'Username or password is wrong',
        HttpStatus.NOT_FOUND
      );

    return new User(user);
  }
}
