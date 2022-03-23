import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { Location, PaymentDetails } from '@pet-donations/interfaces';

export class UpdateKennelDto {
  @IsString()
  public name!: string;

  @IsString()
  @IsOptional()
  public avatarUrl?: string;

  @IsString()
  @IsOptional()
  public description?: string;

  @IsObject()
  @IsOptional()
  public paymentDetails?: PaymentDetails;

  @IsObject()
  @IsOptional()
  public location?: Location;
}
