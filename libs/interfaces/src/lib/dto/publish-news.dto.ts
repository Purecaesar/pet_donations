import {IsNumber, IsString} from 'class-validator';

export class PublishNewsDto {
  @IsNumber()
  public kennelId!: number;

  @IsString()
  public header!: string;

  @IsString()
  public description!: string;
}
