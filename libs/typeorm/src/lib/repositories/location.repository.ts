import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { LocationEntity } from '@pet-donations/typeorm';

@Injectable()
export class LocationRepository {
  constructor(private readonly connection: Connection) {}

  public createLocation(location: Partial<LocationEntity>) {
    return this.repo.save(location);
  }

  public updateLocation(id: number, location: Partial<LocationEntity>) {
    return this.repo.update({ id }, location);
  }

  public findById(id: number) {
    return this.repo.findOne({ id });
  }

  public removeLocation(id: number) {
    return this.repo.delete({ id });
  }

  public get repo() {
    return this.connection.getRepository(LocationEntity);
  }
}
