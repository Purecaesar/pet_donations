import { IsNumber, IsPositive } from 'class-validator';

export class DonateDataDto {
  @IsNumber()
  @IsPositive()
  public donateAmount!: number;
}
