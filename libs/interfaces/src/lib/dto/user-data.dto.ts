import { IsEmail, IsString, Length } from 'class-validator';

export class UserDataDto {
  @IsString()
  public username!: string;

  @IsString()
  @Length(5)
  public password!: string;

  @IsString()
  @IsEmail()
  public email!: string;
}
