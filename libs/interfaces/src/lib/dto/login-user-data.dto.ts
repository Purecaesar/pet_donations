import { IsString } from 'class-validator';

export class LoginUserDataDto {
  @IsString()
  public username!: string;

  @IsString()
  public password!: string;
}
