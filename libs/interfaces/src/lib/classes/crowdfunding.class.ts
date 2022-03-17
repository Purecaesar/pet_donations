import { SimpleEntity } from '@pet-donations/interfaces';

export class Crowdfunding {
  public id!: number;
  public name!: string;
  public description!: string;
  public founded!: number;
  public limit!: number;
  public kennel!: SimpleEntity;
  public date!: string;

  constructor(data: Crowdfunding) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.founded = data.founded;
    this.limit = data.limit;
    this.kennel = data.kennel;
    this.date = data.date;
  }
}
