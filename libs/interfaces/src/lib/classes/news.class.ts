import { SimpleEntity } from '../interfaces/simple-entity.interface';

export interface NewsData {
  id: number;
  header: string;
  description: string;
  date: string;
  kennel: SimpleEntity;
}

export class News {
  public id!: number;
  public header!: string;
  public description!: string;
  public date!: string;
  public kennel!: SimpleEntity;

  constructor(data: NewsData) {
    Object.assign(this, data);
  }
}
