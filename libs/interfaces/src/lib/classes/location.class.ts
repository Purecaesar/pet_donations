export class Location {
  public city!: string;
  public address!: string;

  constructor(data: Location) {
    this.city = data.city;
    this.address = data.address;
  }
}
