import {IsNumber, IsString} from 'class-validator';

export class CreateKennelDto {
  @IsString()
  public kennelName!: string;

  @IsNumber()
  public userId!: number;
}
