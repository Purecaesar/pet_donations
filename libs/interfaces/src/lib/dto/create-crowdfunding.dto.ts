import { IsNumber, IsString } from 'class-validator';

export class CreateCrowdfundingDto {
  @IsNumber()
  public kennelId!: number;

  @IsString()
  public name!: string;

  @IsString()
  public description!: string;

  @IsNumber()
  public limit!: number;
}
