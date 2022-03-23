import {IsEnum, IsOptional, IsString} from "class-validator";

enum Roles {
  VISITOR = 1,
  KENNEL = 2,
}

export class UserInfoDto {
  @IsString()
  public name!: string;

  @IsString()
  public surname!: string;

  @IsString()
  @IsOptional()
  public avatar?: string;

  @IsEnum(Roles)
  public role!: number;
}
