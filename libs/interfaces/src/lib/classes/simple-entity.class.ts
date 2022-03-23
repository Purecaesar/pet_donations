export class SimpleEntity {
  public id!: number;
  public name!: string;

  constructor(data: SimpleEntity) {
    this.id = data.id;
    this.name = data.name;
  }
}
